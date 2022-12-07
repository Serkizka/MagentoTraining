Add custom field to Checkout Shipping step and show it on Billing step

there are two possible ways:
1. Field show like required, but not showing in billing step and really it is like normal

1. Edit checkout_index_index.xml for shipping step
2. add frontend/web/template file.html
3. add frontend/web/js/view file.js


2. Field will be required and it will be show on next step


1. to Block directory add LayoutProcessor.php and register all component of step in this file
2. module/etc/frontend add di.xm file and register LayoutProcessor.php
