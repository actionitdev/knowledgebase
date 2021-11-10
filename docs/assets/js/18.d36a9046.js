(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{377:function(e,t,s){"use strict";s.r(t);var r=s(45),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"solferino-ci-cd-pipeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solferino-ci-cd-pipeline"}},[e._v("#")]),e._v(" Solferino CI/CD Pipeline")]),e._v(" "),s("p",[e._v("A staging pipeline for Solferino WordPress website.")]),e._v(" "),s("h2",{attrs:{id:"purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),s("p",[e._v("This pipeline aims to containerize the Solferino WordPress website with common features and settings that apply to other NS sites. Combined practices of docker and CI/CD are implemented. By using this pipeline, we are aiming to enforce automation in the building, testing, and deployment of our containerized version of the WordPress application.")]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#softwaretools-used"}},[e._v("Software/Tools Used")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#project-file-structure"}},[e._v("Project File Structure")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#docker-services-architecture"}},[e._v("Docker Services Architecture")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#traefik"}},[e._v("Traefik")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wordpress"}},[e._v("Wordpress")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#mysql"}},[e._v("MySQL")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#dbbackup"}},[e._v("dbBackup")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#cicd-workflow"}},[e._v("CI/CD Workflow")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#essential-environment-variables-in-circleci"}},[e._v("Essential Environment Variables in CI")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#detailed-cicd-process"}},[e._v("Detailed CI/CD Process")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#staging-server-configuration"}},[e._v("Staging Server Configuration")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#prerequisities"}},[e._v("Prerequisites")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#extra-files-for-docker-services-to-run"}},[e._v("Extra Files for Docker Services to Run")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#start-docker-services"}},[e._v("Start Docker Services")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#access-running-wordpress-website"}},[e._v("Access Running Wordpress Website")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#data-backup"}},[e._v("Data Backup")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#acknowledgement"}},[e._v("Acknowledgement")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#usage"}},[e._v("Usage")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#periodic-backups"}},[e._v("Periodic Backups")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#s3-bucket-configuration"}},[e._v("S3 Bucket Configuration")])])])])]),e._v(" "),s("h2",{attrs:{id:"software-tools-used"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software-tools-used"}},[e._v("#")]),e._v(" Software/Tools Used")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CircleCI"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://doc.traefik.io/traefik/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Traefik"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://hub.docker.com/_/wordpress",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wordpress Apache docker image"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"project-file-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-file-structure"}},[e._v("#")]),e._v(" Project File Structure")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("docker-compose.yml")])]),e._v(" "),s("p",[s("code",[e._v("docker-compose.yml")]),e._v(" defines the services to run in the docker container. According to "),s("a",{attrs:{href:"#docker-services-architecture"}},[e._v("Docker Services Architecture")]),e._v(", four services are included:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("traefik")]),e._v(": Serves as the reverse proxy, based on traefik official image v2.4")]),e._v(" "),s("li",[s("code",[e._v("mysql")]),e._v(": Database service, based on latest MySQL official image")]),e._v(" "),s("li",[s("code",[e._v("wordpress")]),e._v(": WordPress web application service, based on latest WordPress official image (Apache included)")]),e._v(" "),s("li",[s("code",[e._v("dbBackup")]),e._v(": Customized container in charge of data and schema backup")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".circleci")])]),e._v(" "),s("p",[s("code",[e._v(".circleci")]),e._v(" is the folder to store CircleCI configuration files.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("config.yml")]),e._v(": Specifies commands to execute in CI and criteria to decide whether build tests and deployment process are passed or failed")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".init")])]),e._v(" "),s("p",[s("code",[e._v(".init")]),e._v(" is the folder to store MySQL database initialization files.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("dumpfile.sql.gz")]),e._v(": Specifies SQL commands to initialize the data inside MySQL container")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("dbBackup")])]),e._v(" "),s("p",[s("code",[e._v("dbBackup")]),e._v(" is the folder to store configuration and essential scripts of customized data backup containers.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Dockerfile")]),e._v(": Defines the instructions to build a data backup container")]),e._v(" "),s("li",[s("code",[e._v("backup.sh")]),e._v(": Script of the commands to make dump file from SQL server and make a backup in AWS S3 bucket. The dump files consist of user data and also the schema of the whole database. This container allows developers to build the SQL database from a blank database or with existing data.")]),e._v(" "),s("li",[s("code",[e._v("install.sh")]),e._v(": A script defines the packages to be installed in the image.")]),e._v(" "),s("li",[s("code",[e._v("run.sh")]),e._v(": A script defines when the command to run when the docker image is built.")])])])]),e._v(" "),s("h2",{attrs:{id:"docker-services-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-services-architecture"}},[e._v("#")]),e._v(" Docker Services Architecture")]),e._v(" "),s("p",[e._v("The following four containers will be running together:")]),e._v(" "),s("h3",{attrs:{id:"traefik"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traefik"}},[e._v("#")]),e._v(" Traefik")]),e._v(" "),s("p",[e._v("When an HTTP request comes in, traefik will intercept the request and forward it to the WordPress service for processing.")]),e._v(" "),s("h3",{attrs:{id:"wordpress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wordpress"}},[e._v("#")]),e._v(" Wordpress")]),e._v(" "),s("p",[e._v("WordPress is the main application service. It processes the HTTP request forwarded by traefik. Also, the WP-Content folder is mounted to the WordPress container for themes, plugins, and user uploads.")]),e._v(" "),s("h3",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),s("p",[e._v("MySQL service is for data storage. It stores data that support the WordPress service.")]),e._v(" "),s("h3",{attrs:{id:"dbbackup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dbbackup"}},[e._v("#")]),e._v(" dbBackup")]),e._v(" "),s("p",[e._v("DbBackup service is for data backup. It backs up the data dumped from MySQL service and restores data to MySQL database when necessary. Basically, it periodically backs up data from both MySQL and WP-Content to Amazon S3.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/staging/docker-services-diagram.jpg",alt:"Image of Docker Services"}})]),e._v(" "),s("h2",{attrs:{id:"ci-cd-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-workflow"}},[e._v("#")]),e._v(" CI/CD Workflow")]),e._v(" "),s("p",[e._v("Once any code changes were pushed to the "),s("code",[e._v("dev")]),e._v(" branch, CircleCI will be automatically triggered to build updates and conduct unit tests. Next, the code changes will be deployed to our staging server, where integration tests and performance tests run.")]),e._v(" "),s("p",[s("img",{attrs:{src:"/staging/cicd-pipeline-diagram.jpg",alt:"Image of CI/CD"}})]),e._v(" "),s("h3",{attrs:{id:"essential-environment-variables-in-circleci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#essential-environment-variables-in-circleci"}},[e._v("#")]),e._v(" Essential Environment Variables in CircleCI")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("GITHUB_TOKEN")]),e._v(" (GitHub access token for operations on the Github repository, eg. create new pull requests)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SSH_USER")]),e._v(" (staging server user for ssh access)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SSH_HOST")]),e._v(" (staging server host for ssh access)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_db")]),e._v(" (database name for MySQL docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_user")]),e._v(" (username for MySQL docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_pw")]),e._v(" (user password for MySQL docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("mysql_root_pw")]),e._v(" (root password for MySQL docker service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("id")]),e._v(" (AWS user id for backup service)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("secret")]),e._v(" (AWS user secret for backup service)")])])]),e._v(" "),s("h3",{attrs:{id:"detailed-ci-cd-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detailed-ci-cd-process"}},[e._v("#")]),e._v(" Detailed CI/CD Process")]),e._v(" "),s("p",[e._v("For the whole CI/CD workflow, we have two jobs set up in CircleCI:")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("build")]),e._v(":")]),e._v(" "),s("p",[e._v("This job mainly tests whether the docker services can be built and running properly. If tests are passed, a new pull request will be created to merge updated code to the "),s("code",[e._v("master")]),e._v(" branch. The steps of "),s("code",[e._v("build")]),e._v(" job are as followed:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("checkout")]),e._v(": This step checks out the code from the GitHub repository for CircleCI to use.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Test docker-compose build")]),e._v(": This step checks whether the docker services can be built and running successfully.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Test database connection")]),e._v(": This step checks whether the MySQL database service is running properly and can be accessed.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("gh/setup")]),e._v(": This step sets up the environment for GitHub CLI commands.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Create new pull request")]),e._v(": This step creates a new pull request from the "),s("code",[e._v("dev")]),e._v(" branch to the "),s("code",[e._v("master")]),e._v(" branch if necessary.")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("deploy")]),e._v(":")]),e._v(" "),s("p",[e._v("This job mainly focuses on the deployment of the latest code changes. It depends on the previous "),s("code",[e._v("build")]),e._v(" job. The steps of the "),s("code",[e._v("deploy")]),e._v(" job are as followed:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("add_ssh_keys")]),e._v(": This step prepares the ssh access to the staging server.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Deploy to LightSail staging server")]),e._v(": In this step, firstly, access the staging server via ssh. Then, pull the latest code updates from the GitHub repository. Finally, update docker services.")])])])])]),e._v(" "),s("h2",{attrs:{id:"staging-server-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#staging-server-configuration"}},[e._v("#")]),e._v(" Staging Server Configuration")]),e._v(" "),s("h3",{attrs:{id:"prerequisities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisities"}},[e._v("#")]),e._v(" Prerequisities")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("docker")]),e._v(" "),s("p",[e._v("Please ensure docker is installed and running properly. Or "),s("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Docker"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Check docker installation:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker -v\n")])])])]),e._v(" "),s("li",[s("p",[e._v("docker-compose")]),e._v(" "),s("p",[e._v("Please ensure docker-compose is installed. Or "),s("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker-compose"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Check docker-compose installation:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker-compose -v\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Firewall settings")]),e._v(" "),s("p",[e._v("Please ensure the following TCP ports are open to the Internet:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Port 22 (for ssh access)")])]),e._v(" "),s("li",[s("p",[e._v("Port 80 (for HTTP access)")])]),e._v(" "),s("li",[s("p",[e._v("Port 443 (for HTTPS access)")])])])])]),e._v(" "),s("h3",{attrs:{id:"extra-files-for-docker-services-to-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extra-files-for-docker-services-to-run"}},[e._v("#")]),e._v(" Extra Files for Docker Services to Run")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v(".env")]),e._v(" file")]),e._v(" "),s("p",[s("code",[e._v(".env")]),e._v(" file is mandatory for MySQL database service to run. Please add the following credentials variables in the "),s("code",[e._v(".env")]),e._v(" file. Then, put the "),s("code",[e._v(".env")]),e._v(" file in the root directory of this project.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("- `mysql_db` (database name)\n\n- `mysql_user` (username)\n\n- `mysql_pw` (user password)\n\n- `mysql_root_pw` (root password)\n\n- `id` (AWS user id)\n\n- `secret` (aws user secret)\n")])])]),s("p",[e._v("Example "),s("code",[e._v(".env")]),e._v(" file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql_db=db\nmysql_user=user\nmysql_pw=userpw\nmysql_root_pw=rootpw\nid=someid\nsecret=TheSecretOfTheUser\n")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("wp-content")]),e._v(" folder")]),e._v(" "),s("p",[s("code",[e._v("wp-content")]),e._v(" folder contains themes, plugins, and user uploads used by the WordPress application. You can enable your WordPress themes, plugins, and user uploads by putting your "),s("code",[e._v("wp-content")]),e._v(" folder in the root directory of this project.")])])]),e._v(" "),s("h3",{attrs:{id:"start-docker-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-docker-services"}},[e._v("#")]),e._v(" Start Docker Services")]),e._v(" "),s("p",[e._v("To start docker services and run WordPress website, simply execute the following commands in the command line:")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ docker-compose up -d\n")])])]),s("h3",{attrs:{id:"access-running-wordpress-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-running-wordpress-website"}},[e._v("#")]),e._v(" Access Running WordPress Website")]),e._v(" "),s("p",[e._v("After docker services are started successfully, you can access the WordPress website via (https://staging-sa.actionit.dev) and access WordPress admin console via (https://staging-sa.actionit.dev/wp-admin)")]),e._v(" "),s("h2",{attrs:{id:"data-backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-backup"}},[e._v("#")]),e._v(" Data Backup")]),e._v(" "),s("h3",{attrs:{id:"acknowledgement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgement"}},[e._v("#")]),e._v(" Acknowledgement")]),e._v(" "),s("p",[e._v("The files to build the backup container have used part code from (https://github.com/schickling/dockerfiles) and (https://github.com/fradelg/docker-mysql-cron-backup).")]),e._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("The function of the backup container is making the backup of data and schema from the MySQL database and store it in the AWS S3 bucket.\nThe backup process is achieved by using the "),s("code",[e._v("mysqldump")]),e._v(" command of MYSQL. There is two back up process, one is for all the user data from the database. By using this one, developers can restore the whole website. The other one is the schema file which does not consist of user data. By using this one, developers can restore an empty website.")]),e._v(" "),s("p",[e._v("The environment variables:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("MYSQLDUMP_OPTIONS")]),e._v(" "),s("code",[e._v("mysqldump")]),e._v(" options (default: --skip-lock-tables --single-transaction)")]),e._v(" "),s("li",[s("code",[e._v("MYSQLDUMP_DATABASE")]),e._v(" list of databases you want to backup (default: --all-databases)")]),e._v(" "),s("li",[s("code",[e._v("MYSQL_HOST")]),e._v(" the MySQL host "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("MYSQL_PORT")]),e._v(" the MySQL port (default: 3306)")]),e._v(" "),s("li",[s("code",[e._v("MYSQL_USER")]),e._v(" the MySQL user "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("MYSQL_PASSWORD")]),e._v(" the MySQL password "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_ACCESS_KEY_ID")]),e._v(" your AWS access key "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_SECRET_ACCESS_KEY")]),e._v(" your AWS secret key "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_BUCKET")]),e._v(" your AWS S3 bucket path "),s("em",[e._v("required")])]),e._v(" "),s("li",[s("code",[e._v("S3_PREFIX")]),e._v(" path prefix in your bucket (default: 'backup')")]),e._v(" "),s("li",[s("code",[e._v("S3_FILENAME")]),e._v(" a consistent filename to overwrite with your backup. If not set will use a timestamp.")]),e._v(" "),s("li",[s("code",[e._v("S3_REGION")]),e._v(" the AWS S3 bucket region (default: us-east-2)")]),e._v(" "),s("li",[s("code",[e._v("MULTI_FILES")]),e._v(" Allow having one file per database if set "),s("code",[e._v("yes")]),e._v(" (default: no)")]),e._v(" "),s("li",[s("code",[e._v("SCHEDULE")]),e._v(" backup schedule time, see explanations below")])]),e._v(" "),s("h3",{attrs:{id:"periodic-backups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#periodic-backups"}},[e._v("#")]),e._v(" Periodic Backups")]),e._v(" "),s("p",[e._v("To change the backup frequency, you can modify the "),s("code",[e._v("SCHEDULE")]),e._v(" environment variable using the cron job format.\nCron job use five or six variables format, For example, "),s("code",[e._v("SCHEDULE=10 * * * * *")]),e._v(" means to make the schedule and data backup every 10 mins or "),s("code",[e._v("SCHEDULE=0 0 * * * *")]),e._v(" means to make the backup once an hour, at the beginning of the hour. More information can be found in the cron document (https://pkg.go.dev/github.com/robfig/cron)")]),e._v(" "),s("h3",{attrs:{id:"s3-bucket-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3-bucket-configuration"}},[e._v("#")]),e._v(" S3 Bucket Configuration")]),e._v(" "),s("h4",{attrs:{id:"s3-lifecycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3-lifecycle"}},[e._v("#")]),e._v(" S3 Lifecycle")]),e._v(" "),s("p",[e._v("(https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html)")]),e._v(" "),s("ul",[s("li",[e._v("In the bucket list, we can select the bucket we are using for backup, then select "),s("strong",[e._v("management")]),e._v(" tab and chose to Create a lifecycle rule. The configuration now applies to all the objects in the bucket.")]),e._v(" "),s("li",[e._v("There are several options in the lifecycle rule. The configuration now is to Permanently delete previous versions of objects in a 90 days cycle")]),e._v(" "),s("li",[e._v("S3 bucket policy\nIf we need to modify which user can access the bucket, we need to set the Bucket policy which is in the "),s("strong",[e._v("Permissions")]),e._v(" tab.\n"),s("br"),e._v("The policy now allows the user that created the website application to write to the bucket. Also, the Bucket and objects are not public.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);