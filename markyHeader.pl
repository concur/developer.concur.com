#!/usr/bin/perl

use LWP::UserAgent;
use HTTP::Request;
use strict;
use warnings;
use open qw/:std :utf8/;

use Text::CSV;
use File::Basename;
use File::Path qw(make_path remove_tree);;

our $connection = LWP::UserAgent->new;
our $server_endpoint = 'http://fuckyeahmarkdown.com/go/';


my $csv = Text::CSV->new({ sep_char => ',' });
my $file = $ARGV[0] or die "Need to get CSV file 1 on the command line\n";
my $urlFile = $ARGV[1] or die "Need to get CSV file 2 on the command line\n";
open(my $data, '<', $file) or die "Could not open '$file' $!\n";


while (my $line = <$data>) {
	chomp $line;
 	$line =~ s/\\/\//g;
 	print $line."\n";
	
	if ($csv->parse($line)) {
	 
	      	my @fields = $csv->fields();
	     
			my $resource = $fields[0];
			my $input = '?u='.$resource.'&read=1';
			my $URL = $server_endpoint.$input ;
			my $output = "$fields[1]";
			print "Processing $fields[0]\n";
			my $path = fileparse($output);
			my $dirname = dirname($output);
			if (-d $dirname){
					print "Directory exists\n";
				}
			else {
					print "Creating Directory\n";
					make_path($dirname);
				}

			# set custom HTTP request header fields
			my $req = HTTP::Request->new(GET => $URL);


			my $resp = $connection->request($req);
			if ($resp->is_success) {
			    my $message = $resp->decoded_content;
			    print $message."\n";
			    open(my $urlData, '<', $urlFile) or die "Could not open '$file' $!\n";
			    while (my $urlLine = <$urlData>) {
					chomp $urlLine;

					
					if ($csv->parse($urlLine)) {
		 
		      			my @urlFields = $csv->fields();
		      			my $urlNum = $urlFields[0];
	      				my $newURL = $urlFields[1];

		      			if ($message =~ /(https:\/\/developer.concur.com\/node\/\d+)/) {
		      				my $match = $1;
		      				# print $match."\n";
		      				# print $urlNum."\n";
	      					# print $newURL."\n";
	      					$message =~ s/$urlNum\n/$newURL\n/g;
		      			}

		      		}
		      	}

				$message =~ s/Last Modified:.*//; 
				$message =~ s/\[Source\]\(https:\/\/.*//;

				my $title = $1 if $message =~ m/#\s([\w+\s]+)/; 
				$message =~ s/#\s[\w+\s]+.*//;
				print "Starting: cleanTables\n";
				cleanTables($message);

				print "Done with headers\n";

			    open (NAMEFILE, "> $output");
			    print NAMEFILE '---'."\n";
			    print NAMEFILE "title: $title\n";
			    print NAMEFILE "layout: $fields[2]\n";
			    print NAMEFILE '---'."\n";
			    print NAMEFILE $message;
			    close(NAMEFILE);
				print "COMPLETED: $output\n";
			}
			else {
				print "ERROR on $output:\n";
			    print "		HTTP GET error code: ", $resp->code, "\n";
			    print "		HTTP GET error message: ", $resp->message, "\n";
			}
	 
	} else {
	      warn "Line could not be parsed: $line\n";
	}
}
sub cleanTables 
{
	our $cleanup;
	my $message = $_[0];
	if ($message !~ m/\n\|\s-\-\-\-\-\s\|\n(\|\s+\w+.*)/) {
		our $cleanup = "false";
	} 
	else 
	{
		our $cleanup = "true";
		print $message."\n";
		print "FOUND: Bad Header\n";
		my $table = $1 if $message =~ m/\n\|\s\-\-\-\-\-\s\|\n(\|\s+\w+.*\|)/;
		print $1."\n";
		print "BAD Header: ".$table."\n";
		my $x = quotemeta "|";
		my $y = $table;
		my $count = () = $y =~ /$x/g; 
		my $i = 2;
		my $header = "|-----|";
		while ($i < $count) {
			$header = $header."-----|";
			$i++;
		}
		print "Header: ".$header."\n";

		
		
		my $newBlock = $table."\n".$header."\n";
		print "New Block: $newBlock";
		$message =~ s/\n\|\s\-\-\-\-\-\s\|\n//;
		$message =~ s/\Q$table/$newBlock/;
		print $message;

		
		#print "With: $newBlock\n";
		
		#$message =~ s/$oldBlock/$newBlock/;
	}	
print $cleanup."\n";
	if ($cleanup eq "false") {
		return $message;
	} else {
		cleanTables($message);
	}
}
exit 0;



