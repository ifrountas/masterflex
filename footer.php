</main>

    <!--
    ================================================================================
    #
    #   FOLLOW US
    #
    ================================================================================
    -->

    <section class="follow-us">

        <div class="container">

            <div class="row">

                <div class="col-sm-12 text-center text">
                    <h4 class="color__orange">ΑΚΟΛΟΥΘΗΣΤΕ ΤΟ ILIOUPOLINEWS</h4>
                    <p class="color__wheat">ΑΜΕΣΗ ΕΝΗΜΕΡΩΣΗ ΚΑΙ ΜΕΣΩ ΤΩΝ ΚΟΙΝΩΝΙΚΩΝ ΔΙΚΤΥΩΝ</p>
                    <div class="social__media-container">
                        <?php echo ilnews_get_social_media(); ?>
                    </div>
                </div>
                
            </div>
            
        </div>

    </section>


    <!--
    ================================================================================
    #
    #   FOOTER
    #
    ================================================================================
    -->

    <footer class="footer bg__orange">

        <div class="container">

            <div class="footer-logo row brd-bt is-rel">
                <div class="col-sm-12 site-logo">
                    <?php echo ilnews_display_site_title(); ?>
                </div>
            </div>

            <div class="footer-menu row brd-bt is-rel">
                <div class="col-sm-12">
                    <nav id="footer-menu" class="navigation horizontal__nav" aria-label="<?php _e( 'Footer navigation', 'ilnews' ); ?>">
                        <?php
                            wp_nav_menu( array(
                                'theme_location' => 'footer-navigation',
                                'container'      => 'div',
                                'menu_class'     => 'footer-navigation',
                                'menu_id'        => 'footer-navigation',
                            ));
                        ?>
                    </nav>
                </div>
            </div>
    
            <div class="site-info row">
                <div class="col-sm-12">
                    <p class="color__white">&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>. All rights reserved.</p>
                </div>
            </div><!-- .site-info -->
        </div>

    </footer> <!-- .container -->
    
    

</div> <!-- .wrapper -->


<?php echo ilnews_get_search_box(); ?>

<!--
================================================================================
#
#   WORDPRESS FOOTER OUTPUT
#
================================================================================
-->

<?php wp_footer(); ?>





</body>

</html>
