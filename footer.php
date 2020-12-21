</main>



    <!--
    ================================================================================
    #
    #   FOOTER
    #
    ================================================================================
    -->

    <footer class="footer bg__blue">

        <div class="container">
    
            <div class="site-info row">
                <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'myfirsttheme' ) ); ?>">
                    <?php
                    /* translators: %s: CMS name, i.e. WordPress. */
                    printf( esc_html__( 'Proudly powered by %s', 'myfirsttheme' ), 'WordPress' );
                    ?>
                </a>
                <span class="sep"> | </span>
                    <?php
                    /* translators: 1: Theme name, 2: Theme author. */
                    printf( esc_html__( 'Theme: %1$s by %2$s.', 'myfirsttheme' ), 'myfirsttheme', '<a href="http://bakemywp.com/">BakemyWP</a>' );
                    ?>
            </div><!-- .site-info -->
        </div>

    </footer> <!-- .container -->
    
    

</div> <!-- .wrapper -->



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
