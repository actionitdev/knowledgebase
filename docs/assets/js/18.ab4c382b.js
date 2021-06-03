(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(t,e,a){"use strict";a.r(e);var r=a(45),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p",[a("a",{attrs:{href:"#project-brief"}},[t._v("Project Brief")])]),t._v(" "),a("p",[a("a",{attrs:{href:"#Initial-Migration-process"}},[t._v("Initial Migration process")])]),t._v(" "),a("p",[a("a",{attrs:{href:"#Current-investigation-process"}},[t._v("Current investigation process")])]),t._v(" "),a("p",[a("a",{attrs:{href:"#Import/Export-of-content"}},[t._v("Import/Export of content")])]),t._v(" "),a("p",[a("a",{attrs:{href:"#Catalogue-of-site-content"}},[t._v("Catalogue of site content")])]),t._v(" "),a("h1",{attrs:{id:"project-brief"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-brief"}},[t._v("#")]),t._v(" Project Brief")]),t._v(" "),a("p",[t._v("The current Solferino Academy WordPress website has been through a number of iterations. Recently their team rebuilt the template, and in the process are unable to recover many of the pages that existed prior to this major change. This data exists as a backup of the old server, and needs to be extracted, catalogued and manipulated into a format ready for selective import into the new site.")]),t._v(" "),a("h1",{attrs:{id:"initial-migration-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-migration-process"}},[t._v("#")]),t._v(" Initial Migration process")]),t._v(" "),a("p",[t._v("As per client, the following procedure was followed while initially migrating the content from old site to new site.")]),t._v(" "),a("ul",[a("li",[t._v("Used Duplicator plugin for doing backups. It is a plugin that duplicates all AP files and folders along with the database.")]),t._v(" "),a("li",[t._v("Used XML import/export for restoring the content to new site. Also used DiVi for copy/paste the content, however faced some issues during the migration.")]),t._v(" "),a("li",[t._v("Potential reasons for restoration failure: Theme/plugin compatibility issues, Timeout during restoration.")]),t._v(" "),a("li",[t._v("There have been many structural changes since the initial site. For e.g., previously Strategy 2030 content was scattered around the site in multiple posts/pages. But now it is grouped into one section.")])]),t._v(" "),a("h1",{attrs:{id:"current-investigation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-investigation-process"}},[t._v("#")]),t._v(" Current investigation process")]),t._v(" "),a("ul",[a("li",[t._v("Action IT set up a dev site based on the most recent backup of the current Solferino Academy site.")])]),t._v(" "),a("p",[t._v("Link to dev site: "),a("a",{attrs:{href:"https://solferinoacademy.actionit.dev/wp-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://solferinoacademy.actionit.dev/wp-admin"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Old site archive was shared by the client in the form of a zip backup extracted using Duplicator plugin.")])]),t._v(" "),a("p",[t._v("Link to the Zip Backup:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.yannleflo.ch/dev/downloads/Solferino-Academy/BCKP/00/20191031_thefutureredcrossandredcr_6e7b8a0ece4c4b8d2437_20191031203851_archive.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.yannleflo.ch/dev/downloads/Solferino-Academy/BCKP/00/20191031_thefutureredcrossandredcr_6e7b8a0ece4c4b8d2437_20191031203851_archive.zip"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Installed WordPress site on local and set up the database.")]),t._v(" "),a("li",[t._v("Downloaded the old site archive provided by client and extracted the contents of the zip into the folder created in htdocs for local site. Copied the archive.zip as it is without changing name.")]),t._v(" "),a("li",[t._v("Copied installer-backup.php (from extracted archive zip) to drfolder and renamed it to installer.php. Ran the installer.php file from the browser.")]),t._v(" "),a("li",[t._v("Completed the steps of the installation process by setting the previously setup DB as the database and by creating an admin account for the site.")])]),t._v(" "),a("h1",{attrs:{id:"import-export-of-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-export-of-content"}},[t._v("#")]),t._v(" Import/Export of content")]),t._v(" "),a("p",[t._v('Installed "single post exporter" plugin on the localhost. The plugin allows to import/export the posts/pages one by one.')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img1.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img9.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img2.png",alt:""}})]),t._v(" "),a("p",[t._v("Exported a single post, which gets exported as an xml file.")]),t._v(" "),a("p",[t._v("Imported the same in dev site. No issues found.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img3.png",alt:""}})]),t._v(" "),a("p",[t._v("Exported a page from the local site using the same plugin.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img4.png",alt:""}})]),t._v(" "),a("p",[t._v("In dev site, imported the page.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img5.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img6.png",alt:""}})]),t._v(" "),a("p",[t._v("Verified translation on dev site.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img7.png",alt:""}})]),t._v(" "),a("h1",{attrs:{id:"catalogue-of-site-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#catalogue-of-site-content"}},[t._v("#")]),t._v(" Catalogue of site content")]),t._v(" "),a("p",[t._v("We have created a catalogue of site content (posts and pages) which can be viewed by their names and then selectively imported on to the target site.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/actionitdev/knowledgebase/blob/master/src/projects/dataretrieval/images/img8.png",alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);