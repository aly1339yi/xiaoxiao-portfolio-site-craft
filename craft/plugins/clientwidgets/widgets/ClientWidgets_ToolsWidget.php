<?php
namespace Craft;

class ClientWidgets_ToolsWidget extends BaseWidget
{

  protected $colspan = 1;

  public function getName()
  {
    return Craft::t('Tools list');
  }

  public function getBodyHtml()
  {
      $tools = craft()->components->getComponentsByType(ComponentType::Tool);
      ksort($tools);

      // If there are no Asset sources, don't display the update Asset indexes tool.
      if (count(craft()->assetSources->getAllSources()) == 0)
      {
        unset($tools['AssetIndex']);
      }

      $variables['tools'] = ToolVariable::populateVariables($tools);
      return craft()->templates->render('clientwidgets/_tools', array('tools'=>$tools));
  }

}
