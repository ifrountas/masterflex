<?php


	// CSS and Javascript enqueues.
	require_once __DIR__ . '/functions/enqueues.php';

	
	// Add specific cleanup files for theme.
	require_once __DIR__ . '/functions/cleanup.php';


	// Register menus.
	require_once __DIR__ . '/functions/menus.php';


	// Add theme support functions.
	require_once __DIR__ . '/functions/theme-support.php';


	// Generate useful template tags.
	require_once __DIR__ . '/functions/template-tags.php';


	// Register ACF functions.
	require_once __DIR__ . '/functions/acf.php';


	// Register the required functionallity for ads.
	require_once __DIR__ . '/functions/ads.php';


	// Register the required layouts.
	require_once __DIR__ . '/layouts/layouts.inc.php';