<?php

namespace Elogic\createTemplateByControllerPhp\Controller\Product;

use Magento\Framework\App\Action\Context;
use Magento\Customer\Model\Session;
use Magento\Framework\App\Http\Context as AuthContext;

class Index extends Action
{
    private $authContext;

    protected $_customerSession;

    public function __construct(
        Context $context,
        \Magento\Customer\Model\Session $session,
        AuthContext $authContext
    ) {
        $this->customerSession = $session;
        $this->authContext = $authContext;
        parent::__construct($context);
    }

    public function isCustomerLoggedIn()
    {
        // by using Session model
        return $this->_customerSession->isLoggedIn();
    }
}

