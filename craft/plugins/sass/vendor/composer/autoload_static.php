<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita0c5ff5c16a698841e019c596762ade0
{
    public static $prefixLengthsPsr4 = array (
        'L' => 
        array (
            'Leafo\\ScssPhp\\' => 14,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Leafo\\ScssPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/leafo/scssphp/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $classMap = array (
        'scss_formatter' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
        'scss_formatter_compressed' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
        'scss_formatter_crunched' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
        'scss_formatter_nested' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
        'scss_parser' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
        'scss_server' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
        'scssc' => __DIR__ . '/..' . '/leafo/scssphp/classmap.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita0c5ff5c16a698841e019c596762ade0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita0c5ff5c16a698841e019c596762ade0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita0c5ff5c16a698841e019c596762ade0::$classMap;

        }, null, ClassLoader::class);
    }
}
