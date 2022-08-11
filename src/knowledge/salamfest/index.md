# Salamfest project

Created by [YuanHong Li](https://https://github.com/RingoHanabi)

The following documentation explains the building blocks used to develop the new Salamfest site and how to backup the existing site and migrate the new site to the server

# Version up to date
The current version hosting on the development server can be accessed via https://salamfest.actionit.dev/, the login details can be found by looking back to the basecamp history of Salamfest project group

### Disclaimer
Some of the plugin mentioned in the following have free and paid version, and to achieve the current state on the development site, no paid subscription is required.

# Design tools & plugins
## Elementor
Most of the design of this site was done through [Elementor](https://elementor.com/), a Wordpress site design tool for editing pages with enough features even only with the free version.

## Prime Slider
The slideshow on the home page uses the [Prime Slider](https://primeslider.pro/) plugin to achieve the current effect. By installing Elementor and Prime Slider together, this feature can be used in the Elementor in editing pages.

## Add-on Contact Form 7 - MailPoet 3
The subscription function at the bottom of each page is implemented through the Add-on Contact Form 7 plugin. This plugin is used to creates a form to invite users to subscribe to our emails. It is intergrated with Mail Poet plugin that all subscribed users will go to Mail Poet plugin for us to send newsletters to subscribers

## Mail Poet
This plugin [MailPoet](https://www.mailpoet.com/) takes the subscribed user's information e.g name and emails to send mass emails to all or grouped users on the admininistation page of this plugin.

## Event Manager
In the What's on page, we use the [Event Manager](https://wp-eventmanager.com/) plugin. We can add or change Events in the admin page of this plugin and add them to the page in Elementor. The added ones can be displayed on the page through Elementor

## Modula Image Gallery
In the Artwork page we used the [Modula Image Gallery](https://wp-modula.com/) plugin to achieve the current effect. We can drag, add, change and even change the scale of their display in the page from the administration page of this plugin.

## Powerfolio
In the Artist page, we used the [Powerfolio](https://powerfoliowp.com/) plugin to add some features that were not available in Elementor's original Portfolio, such as filtering the content displayed by a specific tag.

# Utility tools & plugins 
## All-in-One WP Migration
This plugin can basically pack up the entire site into a .wordpress file from the original site and migrate to the destination site. Note that there is a limitation of 300MB compressed file size when restoring. This can be bypassed by using a modified version (legal disclamer: I'm not sure if this is legitimate or not at all) with tutorial can be found by [this link](https://www.youtube.com/watch?v=YZn0ObFragk) and [this link](https://www.youtube.com/watch?v=tIurrwfsCOg),  the modified version of this plugin can be found at the same directory of the source of this document. Follow the video tutorial should help you to set things up properly.

## W3 Total Cache & Jetpack
This plugin can restore the performance of the website to its best form by clearing the cache of the website server. Both of them at currently in free version and should provide enough functionality unless big things happened to the site (Attack or Hacking I guess?)

## WeDocs
We use WeDocs to keep a manual for the salamfest users to learn how to operate the website.  It can be accessed publically via [this link](https://salamfest.actionit.dev/docs/web_tutorial/) on the development site for now and should remain the same url after the domain name after migrated.
