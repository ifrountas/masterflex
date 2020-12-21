<?php

    /**
     * Register custom WordPress menus. 
     * 
     * @return void
     */
    function myfirsttheme_register_menus () {

        register_nav_menus( 
            array(
                'main-navigation'   => __( 'Main Navigation', 'bmwp' ),
                'footer-navigation' => __( 'Footer Navigation', 'bmwp' )
            )
        );

    }

    add_action( 'init', 'myfirsttheme_register_menus' );

?>