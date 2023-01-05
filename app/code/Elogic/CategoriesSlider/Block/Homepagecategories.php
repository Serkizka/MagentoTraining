<?php

namespace Elogic\CategoriesSlider\Block;

class Homepagecategories extends \Magento\Framework\View\Element\Template
{
    protected $_categoryCollectionFactory;

    protected $_categoryHelper;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Catalog\Model\ResourceModel\Category\CollectionFactory $categoryCollectionFactory,
        \Magento\Catalog\Helper\Category $categoryHelper,
        array $data = []
    ) {
        $this->_categoryCollectionFactory = $categoryCollectionFactory;
        $this->_categoryHelper = $categoryHelper;
        parent::__construct($context, $data);
    }

    public function getCategoryCollection($isActive = true, $level = false, $sortBy = false, $pageSize = false) {
        $collection = $this->_categoryCollectionFactory->create();
        $collection->addAttributeToSelect('*');

        // select only active categories
        if ($isActive) {
            $collection->addIsActiveFilter();
        }

        // select categories of certain level
        if ($level) {
            $collection->addLevelFilter($level);
        }

        // sort categories by some value
        if ($sortBy) {
            $collection->addOrderField($sortBy);
        }

        // set pagination
        if ($pageSize) {
            $collection->setPageSize($pageSize);
        }

        return $collection;
    }

    /**
     * Retrieve current store level 2 category
     *
     * @param bool|string $sorted (if true display collection sorted as name otherwise sorted as based on id asc)
     * @param bool $asCollection (if true display all category otherwise display second level category menu visible category for current store)
     * @param bool $toLoad
     */

    public function getStoreCategories($sorted = false, $asCollection = false, $toLoad = true) {
        return $this->_categoryHelper->getStoreCategories($sorted = false, $asCollection = false, $toLoad = true);
    }
}
