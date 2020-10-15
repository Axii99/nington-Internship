var funPlaceholder = function(element) {
    //检测是否需要模拟placeholder

    var placeholder = '';
    if (element && !("placeholder" in document.createElement("input")) && (placeholder = element.getAttribute("placeholder"))) {
        //当前文本控件是否有id, 没有则创建

        var idLabel = element.id ;
        if (!idLabel) {
            idLabel = "placeholder_" + new Date().getTime();
            element.id = idLabel;
        }

        //创建label元素
        if(!element.label_hide){
            element.label_hide =  document.createElement("label");
        }
        var eleLabel = element.label_hide;
        eleLabel.htmlFor = idLabel;
        eleLabel.style.position = "absolute";

        //根据文本框实际尺寸修改这里的margin值
        eleLabel.style.fontsize="16px";
        eleLabel.style.float="left";
        eleLabel.style.padding="4px 0 0 3px";
        eleLabel.style.color = "#cccccc";
        eleLabel.style.cursor = "text";
        //插入创建的label元素节点

        element.parentNode.insertBefore(eleLabel, element);
        //事件

        element.onfocus = function() {
            eleLabel.innerHTML = "";
        };
        element.onblur = function() {
            if (this.value === "") {
                eleLabel.innerHTML = placeholder;  
            }
        };

        //样式初始化

        if (element.value === "") {
            eleLabel.innerHTML = placeholder;   
        }
    }   
};

var supportPlaceholder = function(){
    if (!("placeholder" in document.createElement("input"))){
        $('[placeholder]').each(function(){
            funPlaceholder($(this)[0]);
        });
    }
};
