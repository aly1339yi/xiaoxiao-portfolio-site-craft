<?php
namespace Craft;

class ClientWidgets_TwitterWidget extends BaseWidget
{

  protected $colspan = 1;

  public function getName()
  {
    return Craft::t('Twitter feed');
  }

  public function getBodyHtml()
  {
      return craft()->templates->render('clientwidgets/_twitter');
  }
}
