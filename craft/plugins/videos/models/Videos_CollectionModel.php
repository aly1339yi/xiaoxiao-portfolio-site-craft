<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_CollectionModel extends BaseModel
{
    // Protected Methods
    // =========================================================================

    protected function defineAttributes()
    {
        return array(
            'name' => AttributeType::String,
            'method' => AttributeType::String,
            'options' => AttributeType::Mixed,
        );
    }
}
