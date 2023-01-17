<?php
    foreach ($posts as $post) {
        $categores = Post::getCategorybyPost($post["post_id"]);
    ?>
<div class="iteam">
    <img src="<?= $post["image"]?>" alt="">
    <div class="text-item">
        <div class="first-text">
        <h3 class="text-h3"><?= $post["title"]?></h3>
        <p class="text-p"><?= $post["short_text"]?></p> 
    </div>                              
    <div class="item-category">
        <?php
        foreach ($categores as $iteam) {
            ?>
        <span class="category-select"><?= $iteam["titel"]?></span>
    <?php
    }
    ?>
    </div>                        
    </div>
</div>
<?php
    }
?>