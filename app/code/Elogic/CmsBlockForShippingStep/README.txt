Show bookmarks.
That have 2 possible way.
By this way you must add html file to directory app/design/frontend/MyTheme/Magento_Checkout/web/template/file.html

Add cms block from admin panel
1. etc/frontend/di.xml register config provider and your cms block by adding identifier from admin panel.
2. in Model create ConfigProvider.php
3. add your html to design/frontend/ThemeName/Module_Name/web/template/file.html
