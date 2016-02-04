# -*- mode: ruby -*-
# vi: set ft=ruby :

$coreos_update_channel = "beta"
$coreos_image_version = "899.5.0"
$vm_gui = false
$vm_memory = 1024
$vm_cpus = 1

Vagrant.configure(2) do |config|
    config.ssh.insert_key = false

  
    config.vm.box = "coreos-%s" % $coreos_update_channel
    config.vm.box_version = $coreos_image_version
    config.vm.box_url = "http://%s.release.core-os.net/amd64-usr/%s/coreos_production_vagrant_vmware_fusion.json" % [$coreos_update_channel, $coreos_image_version]

    config.ssh.insert_key = false

    # network setup
    config.vm.network "private_network", ip: "192.168.50.20"
    config.vm.hostname="developer.concur.com"

    config.vm.synced_folder ".", "/home/core/vagrant", id: "core", :nfs => true,  :mount_options   => ['nolock,vers=3,udp']

    # expose Docker's TCP port
    config.vm.network "forwarded_port", guest: 2375, host: 2375, auto_correct: true

    # provision cloud-config user-data (configures Docker daemon TCP service)
    config.vm.provision :file, source: "vagrant/vagrantfile-user-data", destination: "/tmp/vagrantfile-user-data"
    config.vm.provision :shell, :inline => "mv /tmp/vagrantfile-user-data /var/lib/coreos-vagrant/", :privileged => true

    # provision nginx container
    config.vm.provision "docker" do |d|
        # docker run -d -p 443:443 -v `pwd`/_site:/usr/share/nginx/html -v `pwd`/vagrant/nginx:/etc/nginx/conf.d nginx
        d.run "nginx", daemonize: true, args: "-p 443:443 -v /home/core/vagrant/_site:/usr/share/nginx/html -v /home/core/vagrant/vagrant/nginx:/etc/nginx/conf.d"
    end

    config.hostsupdater.remove_on_suspend = true;
  
end
