<?php


	/**
     * Register myfirsttheme fonts
     * @return void
     */
	function myfirsttheme_register_fonts() {

        wp_register_style( 'myfirsttheme-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;700;900&display=swap', array(), '', 'all' );
	}

	add_action( 'init', 'myfirsttheme_register_fonts', 1 );

	
	/**
     * Enqueue myfirsttheme fonts.
     * @return void
     */
	function myfirsttheme_enqueue_fonts() {
		wp_enqueue_style( 'myfirsttheme-fonts' );  ?>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin /> <?php
	}

	add_action( 'wp_enqueue_scripts', 'myfirsttheme_enqueue_fonts', 1 );
	


 	/**
     * Enqueue myfirsttheme specific CSS.
     * @return void
     */
	function myfirsttheme_enqueue_css() {
       
		$css_files = array(
			array( 'id' => 'myfirsttheme-css',  'file' => '/assets/css/style.main.css' )
		);

	 	foreach( $css_files as $css ) {
            wp_enqueue_style( $css['id'],  get_template_directory_uri() . $css['file'],  array(), filemtime( get_template_directory() . $css['file'] ), 'all' );
        }

	}

	add_action( 'wp_enqueue_scripts', 'myfirsttheme_enqueue_css', 999 );
	add_action( 'customize_controls_print_styles', 'myfirsttheme_enqueue_css' );



	/**
     * Enqueue theme specific Js.
     * @return void
     */
	function myfirsttheme_enqueue_js() {

	 	$in_footer = true;

	 	$js_list = array(
			array( 'id' => 'myfirsttheme-functions', 'file' => '/assets/js/functions.js',  'deps' => array('jquery'), 'place' => $in_footer ),
        );

        foreach( $js_list as $js ) {
            wp_enqueue_script( $js['id'], get_template_directory_uri() . $js['file'], $js['deps'], filemtime( get_template_directory() . $js['file'] ), $js['place'] );
        }
	}

	add_action( 'wp_enqueue_scripts', 'myfirsttheme_enqueue_js', 999 );



	/**
     * Enqueue theme compatibility for css vars on Internet Explorer 11
     * @return void
     */
	function myfirsttheme_enqueue_ie_css_vars_compatibility() {

		$css_vars_ie = get_template_directory_uri() . '/assets/js/function.ie11.vars.js';

		?>
	    <script>window.MSInputMethodContext && document.documentMode && document.write('<!-- BROWSER IE 11 --><script src="<?php echo $css_vars_ie; ?>"><\x2fscript>');</script>
		<?php

	}

	add_action( 'wp_enqueue_scripts', 'myfirsttheme_enqueue_ie_css_vars_compatibility', 999 );


	/**
	 * Enqueue Javascript postMessage handlers for the Customizer.
	 *
	 * Binds JS handlers to make the Customizer preview reload changes asynchronously.
	 *
	 * @since myfirsttheme 1.0
	 */
	function myfirsttheme_customize_preview_js() {
		wp_enqueue_script( 'myfirsttheme-customizer', get_template_directory_uri() . '/assets/js/theme-customizer.js', array( 'customize-preview' ), '20141120', true );
	}
	add_action( 'customize_preview_init', 'myfirsttheme_customize_preview_js' );

 	
?>