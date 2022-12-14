(function ($) {
    var myflow = $.myflow;

    $.extend(true, myflow.editors, {
        inputEditor: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                $('<input style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();
                }).appendTo('#' + _div);

                $('#' + _div).data('editor', this);
            }
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            }
        },
        passRateEditor: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;
                debugger;
                if (props["modal"].value == "3") {
                    $('#' + _div).empty();
                    //props[_k].value=0;
                    $('<input style="width:100%;"/>').val(props[_k].value).change(function () {
                        props[_k].value = $(this).val();
                    }).appendTo('#' + _div);
                } else {
                    $('#' + _div).empty();
                    props[_k].value = 0;
                    $('<input style="width:100%;" value="0" disabled="disabled"/>').val(props[_k].value).change(function () {
                        props[_k].value = $(this).val();
                    }).appendTo('#' + _div);
                }
                $('#' + _div).data('editor', this);
            }
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            }
        },
        selectEditor: function (arg) {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle = $('<select  style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();
                }).appendTo('#' + _div);

                if (typeof arg === 'string') {
                    $.ajax({
                        type: "GET",
                        url: arg,
                        success: function (data) {
                            var opts = eval(data);
                            if (opts && opts.length) {
                                for (var idx = 0; idx < opts.length; idx++) {
                                    sle.append('<option value="' + opts[idx].value + '">' + opts[idx].name + '</option>');
                                }
                                sle.val(_props[_k].value);
                            }
                        }
                    });
                } else {
                    for (var idx = 0; idx < arg.length; idx++) {
                        sle.append('<option value="' + arg[idx].value + '">' + arg[idx].name + '</option>');
                    }
                    sle.val(_props[_k].value);
                }

                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            };
        },
        selectOption: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle = $('<select  style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();
                }).appendTo('#' + _div);
                var arg = [];
                arg.push({value: "0", name: "??????"});
                arg.push({value: "1", name: "??????"});
                arg.push({value: "2", name: "??????"});

                for (var idx = 0; idx < arg.length; idx++) {
                    sle.append('<option value="' + arg[idx].value + '">' + arg[idx].name + '</option>');
                }
                sle.val(_props[_k].value);


                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            };
        },
        selectType: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle = $('<span  style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();
                }).appendTo('#' + _div);
                /*   var arg=[];
                   arg.push({value:"1",  name:"??????????????????"});
                   arg.push({value:"2",  name:"????????????"});
                   arg.push({value:"3",  name:"????????????"});
                   arg.push({value:"4",  name:"????????????"});
                   arg.push({value:"5",  name:"??????????????????"});
                   arg.push({value:"6",  name:"??????????????????"});

                   for(var idx=0; idx<arg.length; idx++){
                       sle.append('<option value="'+arg[idx].value+'">'+arg[idx].name+'</option>');
                   }
                   sle.val(_props[_k].value);*/
                if (props["text"].value == "??????") {
                    sle.append('<span value="1">??????????????????</span>');
                } else if (props["text"].value == "??????" || props["text"].value == "??????") {
                    sle.append('<span value="2">????????????</span>');
                } else if (props["text"].value == "??????") {
                    sle.append('<span value="3">????????????</span>');
                } else if (props["text"].value == "??????") {
                    sle.append('<span value="4">????????????</span>');
                } else if (props["text"].value == "??????") {
                    sle.append('<span value="5">????????????</span>');
                } else if (props["text"].value == "??????") {
                    sle.append('<span value="6">??????????????????</span>');
                }
                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            };
        },
        //??????????????????
        selectParamSum: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle = $('<select  style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();
                }).appendTo('#' + _div);
                var arg = [];

                arg.push({value: "0", name: "0"});
                arg.push({value: "1", name: "1"});
                arg.push({value: "2", name: "2"});
                arg.push({value: "3", name: "3"});
                arg.push({value: "4", name: "4"});
                arg.push({value: "5", name: "5"});

                for (var idx = 0; idx < arg.length; idx++) {
                    sle.append('<option value="' + arg[idx].value + '">' + arg[idx].name + '</option>');
                }
                sle.val(_props[_k].value);


                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            };
        },
        //??????????????????
        selectService: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle = $('<select  style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();

                }).appendTo('#' + _div);
                //???????????????????????????????????????????????????
                var arg = [];

                arg.push({value: "1", name: "?????????1"});
                arg.push({value: "2", name: "?????????2"});
                arg.push({value: "3", name: "?????????3"});
                arg.push({value: "4", name: "?????????4"});
                arg.push({value: "5", name: "?????????5"});
                arg.push({value: "6", name: "?????????6"});

                for (var idx = 0; idx < arg.length; idx++) {
                    sle.append('<option value="' + arg[idx].value + '">' + arg[idx].name + '</option>');
                }
                sle.val(_props[_k].value);


                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            };
        },
        //??????????????????
        getParamMap: function () {
            var _props, _k, _div, _src, _r;
            var paramMap = [];
            this.init = function (props, k, div, src, r) {

                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle;
                $('#' + _div).empty();
                sle = $('<span>????????????&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?????????</span>').appendTo('#' + _div);
                for (var idx = 0; idx < props["paramSum"].value; idx++) {
                    sle.append('<br/><input id="paramKey' + idx + '" type="text" style="width:40%;"/>&nbsp;<input id="paramValue' + idx + ' " type="text"  style="width:40%;"/><br/>').appendTo('#' + _div);
                }
                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
              /*      var paramMap = [];
                    for (var idx = 0;idx<_props["paramSum"].value;idx++){
                        paramMap.push({key: document.getElementById('#paramKey0').value, name: document.getElementById('#paramValue0').value});
                    }
                    console.log(paramMap);
                    _props[_k].value = paramMap;*/
            /*    $('#' + _div + ' input').each(function () {
                        paramMap.push($(this).val());
                    });*/
                for (var idx=0;idx<_props["paramSum"].value;idx++){
                    paramMap.push(key="",value="");
                }
                _props[_k].value = paramMap;
            };
        }
    });

})(jQuery);
