(function($){
    var myflow = $.myflow;

    $.extend(true,myflow.config.rect,{
        attr : {
            r : 8,
            fill : '#F6F7FF',
            stroke : '#03689A',
            "stroke-width" : 2
        }
    });

/*    $.extend(true,myflow.config.props.props,{
        name : {name:'name', label:'名称', value:'新建流程', editor:function(){return new myflow.editors.inputEditor();}},
        key : {name:'key', label:'标识', value:'', editor:function(){return new myflow.editors.inputEditor();}},
        desc : {name:'desc', label:'描述', value:'', editor:function(){return new myflow.editors.inputEditor();}}
    });*/


    $.extend(true,myflow.config.tools.states,{
        start : {
            showType: 'image',
            type : 'start',
            name : {text:'<<start>>'},
            text : {text:'开始'},
            img : {src : 'img/48/start_event_empty.png',width : 48, height:48},
            attr : {width:50 ,heigth:50 },
            props : {
                text: {name:'text',label: '步骤名称', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
                type: {name:'type', label: '步骤类型', value:'过程开始节点', editor: function(){return new myflow.editors.selectType();}},
                paramSum: {name:'paramSum', label: '参数个数', value:'0', editor: function(){return new myflow.editors.selectParamSum();}},
                paramMap: {name:'paramMap', label: '参数列表', value:'', editor: function(){return new myflow.editors.getParamMap();}}

            }},
        end : {showType: 'image',type : 'end',
            name : {text:'<<end>>'},
            text : {text:'结束'},
            img : {src : 'img/48/end_event_terminate.png',width : 48, height:48},
            attr : {width:50 ,heigth:50 },
            props : {
                text: {name:'text',label: '步骤名称', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'结束'},
                type: {name:'type', label: '步骤类型', value:'', editor: function(){return new myflow.editors.selectType();}},
              /*  modal: {name:'modal', label : '任务模式', value:'', editor: function(){return new myflow.editors.selectModal();}},
                passRate: {name:'passRate', label : '投票通过率', value:'', editor: function(){return new myflow.editors.passRateEditor();}},
                peopleType: {name:'peopleType', label : '办理人类型', value:'', editor: function(){return new myflow.editors.selectPeopleType();}},
                choice: {name:'choice', label : '选人', value:'', editor: function(){return new myflow.editors.selectChoice();}},
                desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}*/
            }},
        'end-error' : {showType: 'image',type : 'end-error',
            name : {text:'<<end-error>>'},
            text : {text:'错误'},
            img : {src : 'img/48/end_event_error.png',width : 48, height:48},
            attr : {width:50 ,heigth:50 },
            props : {
                text: {name:'text',label: '步骤名称', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'错误'},
                type: {name:'type', label: '步骤类型', value:'', editor: function(){return new myflow.editors.selectType();}},
       /*         modal: {name:'modal', label : '任务模式', value:'', editor: function(){return new myflow.editors.selectModal();}},
                passRate: {name:'passRate', label : '投票通过率', value:'', editor: function(){return new myflow.editors.passRateEditor();}},
                peopleType: {name:'peopleType', label : '办理人类型', value:'', editor: function(){return new myflow.editors.selectPeopleType();}},
                choice: {name:'choice', label : '选人', value:'', editor: function(){return new myflow.editors.selectChoice();}},
                desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}*/
            }},
        fork : {showType: 'image',type : 'fork',
            name : {text:'<<fork>>'},
            text : {text:'分支'},
            img : {src : 'img/48/gateway_exclusive.png',width :48, height:48},
            attr : {width:50 ,heigth:50 },
            props : {
                text: {name:'text', label: '步骤名称', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'分支'},
                type: {name:'type', label: '步骤类型', value:'', editor: function(){return new myflow.editors.selectType();}},
       /*         modal: {name:'modal', label : '任务模式', value:'', editor: function(){return new myflow.editors.selectModal();}},
                passRate: {name:'passRate', label : '投票通过率', value:'', editor: function(){return new myflow.editors.passRateEditor();}},
                peopleType: {name:'peopleType', label : '办理人类型', value:'', editor: function(){return new myflow.editors.selectPeopleType();}},
                choice: {name:'choice', label : '选人', value:'', editor: function(){return new myflow.editors.selectChoice();}},
                desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}*/
            }},
        join : {showType: 'image',type : 'join',
            name : {text:'<<join>>'},
            text : {text:'合并'},
            img : {src : 'img/48/gateway_parallel.png',width :48, height:48},
            attr : {width:50 ,heigth:50 },
            props : {
                text: {name:'text', label: '步骤名称', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'合并'},
                type: {name:'type', label: '步骤类型', value:'', editor: function(){return new myflow.editors.selectType();}},
          /*      modal: {name:'modal', label : '任务模式', value:'', editor: function(){return new myflow.editors.selectModal();}},
                passRate: {name:'passRate', label : '投票通过率', value:'', editor: function(){return new myflow.editors.passRateEditor();}},
                peopleType: {name:'peopleType', label : '办理人类型', value:'', editor: function(){return new myflow.editors.selectPeopleType();}},
                choice: {name:'choice', label : '选人', value:'', editor: function(){return new myflow.editors.selectChoice();}},
                desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}}*/
            }},
        task : {showType: 'text',type : 'task',
            name : {text:'<<task>>'},
            text : {text:'服务'},
            img : {src : 'img/48/task_empty.png',width :48, height:48},
            props : {
                text: {name:'text', label: '步骤名称', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'服务'},
                type: {name:'type', label: '步骤类型', value:'', editor: function(){return new myflow.editors.selectType();}},
                modal: {name:'modal', label : '服务名称', value:'', editor: function(){return new myflow.editors.selectService();}},
                paramType1: {
                    name: 'paramType1', label: '参数类型', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                paramValue1: {
                    name: 'paramValue1', label: '参数值', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                paramType2: {
                    name: 'paramType1', label: '参数类型', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                paramValue2: {
                    name: 'paramValue1', label: '参数值', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                resultType: {
                    name: 'resultType', label: '返回类型', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                resultValue: {
                    name: 'resultValue', label: '返回值', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }}
    });
})(jQuery);