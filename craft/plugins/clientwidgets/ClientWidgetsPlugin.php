<?php
namespace Craft;

class ClientWidgetsPlugin extends BasePlugin
{
  function getName()
  {
    return Craft::t('Client Dashboard Widgets Plugin');
  }

  function getVersion()
  {
    return '0.5';
  }

  function getDeveloper()
  {
    return 'Joe Pagan';
  }

  function getDeveloperUrl()
  {
    return 'http://www.joe-pagan.com';
  }

  public function hasCpSection()
  {
      return false;
  }
}
