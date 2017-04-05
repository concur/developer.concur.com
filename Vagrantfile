# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.50.20"
  config.vm.hostname="developer.concur.com"

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    printf "\tInstalling NGINX\n"
    sudo apt-get update
    sudo apt-get install -y nginx

    printf "\tCopying demo.conf to nginx configuration directory\n"
    cp /vagrant/vagrant/nginx/* /etc/nginx/conf.d/

    printf "\tChanging base NGINX configuration\n"
    rm /etc/nginx/sites-enabled/default
    # https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#
    sed -i 's/sendfile.*/sendfile off;/' /etc/nginx/nginx.conf

    printf "\tReloading NGINX\n"
    nginx -s reload
  SHELL
end
