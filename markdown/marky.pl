#!/usr/bin/perl

use LWP::UserAgent;
use HTTP::Request;
use strict;
use warnings;
 
use Text::CSV;
use File::Basename;
use File::Path qw(make_path remove_tree);;

our $connection = LWP::UserAgent->new;
our $server_endpoint = 'http://fuckyeahmarkdown.com/go/';


my $csv = Text::CSV->new({ sep_char => ',' });
 
my $file = $ARGV[0] or die "Need to get CSV file on the command line\n";
 
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
		#print $path."\n";
		
		#print $output."\n";
		# set custom HTTP request header fields
		my $req = HTTP::Request->new(GET => $URL);
		#$req->header('content-type' => 'text/plain');

		my $resp = $connection->request($req);
		if ($resp->is_success) {
		    my $message = $resp->decoded_content;
		    #print "$message\n";

		    open (NAMEFILE, "> $output");
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
#print "$sum\n";

exit 0;



