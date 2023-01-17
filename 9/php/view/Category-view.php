<?php
    foreach ($categories as $category) {
?>
    <li class="second-li">
        <a href="/<?= $category["url"]?>" class="category"><?= $category["titel"]?></a>
    </li>
<?php
    }
?>