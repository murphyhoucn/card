function getBingImages(imgUrls) {
	/**
	 * 获取Bing壁纸
	 * 先使用 GitHub Action 每天获取 Bing 壁纸 URL 并更新 images.json 文件
	 * 然后读取 images.json 文件中的数据
	 */
	var indexName = "bing-image-index";
	var index = sessionStorage.getItem(indexName);
	var panel = document.querySelector('#panel');
	if (isNaN(index) || index == 7) index = 0;
	else index++;
	var imgUrl = imgUrls[index];
	var url = "https://www.cn.bing.com" + imgUrl;
	panel.style.background = "url('" + url + "') center center no-repeat #666";
	panel.style.backgroundSize = "cover";
	sessionStorage.setItem(indexName, index);
}
