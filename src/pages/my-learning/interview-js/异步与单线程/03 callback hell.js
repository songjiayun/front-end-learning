// 获取第一份数据
$.get(url1, (data1) => {
    console.log(data1);

    // 获取第二份数据
		$.get(url2, (data2) => {
			console.log(data2);
	
			// 获取第三份数据
			$.get(url3, (data3) => {
				console.log(data3);
		
				// 还可能获取更多数据
		});
	});
});
