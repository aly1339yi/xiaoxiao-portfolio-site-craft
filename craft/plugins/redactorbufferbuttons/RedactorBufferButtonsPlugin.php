<?php
namespace Craft;

/**
 * Redactor Buffer Buttons plugin
 */
class RedactorBufferButtonsPlugin extends BasePlugin
{
	public function getName()
	{
		return 'Redactor Buffer Buttons';
	}

	public function getVersion()
	{
		return '1.0';
	}

	public function getDeveloper()
	{
		return 'Chad Wells';
	}

	public function getDeveloperUrl()
	{
		return 'http://twitter.com/superwick';
	}

	public function init()
	{
		if (!craft()->isConsole())
		{
			if (craft()->request->isCpRequest())
			{
				craft()->templates->includeJsResource('redactorbufferbuttons/bufferbuttons.js');
			}
		}
	}
}
