<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>



    <!--
    ================================================================================
    #
    #   GENERIC META TAGS
    #
    ================================================================================
    -->

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title><?php wp_title('', true); ?></title>

    <meta name="Author"    content="<?php bloginfo( 'name' ); ?> &copy;" />
    <meta name="Owner"     content="<?php bloginfo( 'name' ); ?> &copy;" />
    <meta name="Publisher" content="<?php bloginfo( 'name' ); ?> &copy;" />
    <meta name="Copyright" content="<?php bloginfo( 'name' ); ?> &copy;" />
    <meta name="description" content="<?php bloginfo( 'description' ); ?>" />

    <meta name="Robots" content="all, index, follow" />

    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo( 'name' ); ?> RSS Feed" href="<?php bloginfo( 'rss2_url' ); ?>" />

    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1, minimal-ui" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    

    <!--
    ================================================================================
    *
    *   WORDPRESS HEAD OUTPUT
    *
    ================================================================================
    -->

    <?php wp_head(); ?>



</head>



<body <?php body_class(); ?>>
    

    <!--
    ================================================================================
    #
    #   PAGE WRAPPER
    #
    ================================================================================
    -->

    <div class="wrapper">