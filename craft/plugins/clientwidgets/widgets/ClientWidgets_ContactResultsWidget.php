<?php
namespace Craft;

// This widget only works if you have this plugin setup: https://github.com/joshangell/Craft-ContactFromEntries

class ClientWidgets_ContactResultsWidget extends BaseWidget
{

  protected $colspan = 1;

  public function getName()
  {
    return Craft::t('Contact form enquiries');
  }

  public function getBodyHtml()
  {
      return craft()->templates->render('clientwidgets/_contact');
  }
}
