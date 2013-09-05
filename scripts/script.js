function anonymous(data) {
var a,b,em,form,html,i,li,map,object,ol,p,rt,s,summary,td,th,tr,u,ul,tt,col,hr,input,g;a = function(){return __cc.tag('a', arguments);};b = function(){return __cc.tag('b', arguments);};em = function(){return __cc.tag('em', arguments);};form = function(){return __cc.tag('form', arguments);};html = function(){return __cc.tag('html', arguments);};i = function(){return __cc.tag('i', arguments);};li = function(){return __cc.tag('li', arguments);};map = function(){return __cc.tag('map', arguments);};object = function(){return __cc.tag('object', arguments);};ol = function(){return __cc.tag('ol', arguments);};p = function(){return __cc.tag('p', arguments);};rt = function(){return __cc.tag('rt', arguments);};s = function(){return __cc.tag('s', arguments);};summary = function(){return __cc.tag('summary', arguments);};td = function(){return __cc.tag('td', arguments);};th = function(){return __cc.tag('th', arguments);};tr = function(){return __cc.tag('tr', arguments);};u = function(){return __cc.tag('u', arguments);};ul = function(){return __cc.tag('ul', arguments);};tt = function(){return __cc.tag('tt', arguments);};col = function(){return __cc.tag('col', arguments);};hr = function(){return __cc.tag('hr', arguments);};input = function(){return __cc.tag('input', arguments);};g = function(){return __cc.tag('g', arguments);};var _ = function(){return (function lodash(value) {
      // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
      return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
       ? value
       : new lodashWrapper(value);
    }).apply(data, arguments);};var moment = function(){return (function (input, format, lang) {
        return makeMoment({
            _i : input,
            _f : format,
            _l : lang,
            _isUTC : false
        });
    }).apply(data, arguments);};var genTags = function(){return (function (tags) {
              return _.map(tags, function(name) {
                name = name.trim();
                return "<a href=\"/site/tagmap.html#" + (name.toLowerCase()) + "\" class=\"tag\">" + name + "</a>";
              }).join(' ');
            }).apply(data, arguments);};var genAuthors = function(){return (function (name) {
              var names;

              if (!name) {
                return '';
              }
              names = name;
              if (_.isString(name)) {
                names = name.split(',');
              }
              return _.map(names, function(name) {
                var author;

                name = name.trim();
                author = authors[name];
                if (author.hasOwnProperty('page')) {
                  return to.value(author.page);
                }
                return "<a href=\"https://twitter.com/" + author.twitter + "/\">" + author.name + "</a>";
              }).join(', ');
            }).apply(data, arguments);};var genTwitter = function(){return (function (names) {
              var name, ret, _i, _len;

              ret = [];
              for (_i = 0, _len = names.length; _i < _len; _i++) {
                name = names[_i];
                name = name.trim();
                if (authors.hasOwnProperty(name)) {
                  ret.push('@' + authors[name].twitter);
                }
              }
              return ret.join(' ');
            }).apply(data, arguments);};var summary = function(){return (function (contentRendered) {
            var splited;
            splited = contentRendered.split(/<h[123456]>/);
            return splited[0];
          }).apply(data, arguments);};var partial = function(){return (function (name, templateData) {
          var partial, td;
          if (at.partials[name] != null) {
            partial = at.partials[name];
            td = templateData ? templateData : this;
            td = at.normalizeTemplateData(partial, td);
            return at.buffManager.template({
              document: partial,
              templateData: td
            });
          } else {
            return grunt.fail.fatal("cannot found a partial: " + name);
          }
        }).apply(data, arguments);};var collection = function(){return (function (name) {
          if (at.collections[name] != null) {
            return at.collections[name];
          } else {
            grunt.fail.fatal("cannot found a collection: " + name);
            return {};
          }
        }).apply(data, arguments);};var __slice = Array.prototype.slice;var __hasProp = Object.prototype.hasOwnProperty;var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };var __extends = function(child, parent) {  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }  function ctor() { this.constructor = child; }  ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype;  return child; };var __indexOf = Array.prototype.indexOf || function(item) {  for (var i = 0, l = this.length; i < l; i++) {    if (this[i] === item) return i;  } return -1; };
  var cede, coffeescript, comment, doctype, h, ie, stylus, tag, text, __cc, _ref, _ref1;
  if (data == null) {
    data = {};
  }
  if ((_ref = data.format) == null) {
    data.format = false;
  }
  if ((_ref1 = data.autoescape) == null) {
    data.autoescape = false;
  }
  __cc = {
    buffer: [],
    esc: function(txt) {
      if (data.autoescape) {
        return h(txt);
      } else {
        return txt.toString();
      }
    },
    tabs: 0,
    repeat: function(string, count) {
      return Array(count + 1).join(string);
    },
    indent: function() {
      if (data.format) {
        return text(this.repeat('  ', this.tabs));
      }
    },
    tag: function(name, args) {
      var combo, i, _i, _len;
      combo = [name];
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        i = args[_i];
        combo.push(i);
      }
      return tag.apply(data, combo);
    },
    render_idclass: function(str) {
      var c, classes, i, id, idx, _i, _j, _len, _len1, _ref2;
      classes = [];
      _ref2 = str.split('.');
      for (idx = _i = 0, _len = _ref2.length; _i < _len; idx = ++_i) {
        i = _ref2[idx];
        if (i !== '') {
          if (idx === 0 && i.indexOf('#') === 0) {
            id = i.slice(1);
          } else {
            classes.push(i);
          }
        }
      }
      if (id) {
        text(" id=\"" + id + "\"");
      }
      if (classes.length > 0) {
        text(" class=\"");
        for (_j = 0, _len1 = classes.length; _j < _len1; _j++) {
          c = classes[_j];
          if (c !== classes[0]) {
            text(' ');
          }
          text(c);
        }
        return text('"');
      }
    },
    render_attrs: function(obj, prefix) {
      var k, v, _results;
      if (prefix == null) {
        prefix = '';
      }
      _results = [];
      for (k in obj) {
        v = obj[k];
        if (typeof v === 'boolean' && v) {
          v = k;
        }
        if (typeof v === 'function') {
          v = "(" + v + ").call(this);";
        }
        if (typeof v === 'object' && !(v instanceof Array)) {
          _results.push(this.render_attrs(v, prefix + k + '-'));
        } else if (v || v === 0 || v === '') {
          _results.push(text(" " + (prefix + k) + "=\"" + (this.esc(v)) + "\""));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    render_contents: function(contents, safe) {
      var result;
      if (safe == null) {
        safe = false;
      }
      switch (typeof contents) {
        case 'string':
        case 'number':
        case 'boolean':
          return text(safe ? contents : this.esc(contents));
        case 'function':
          if (data.format) {
            text('\n');
          }
          this.tabs++;
          result = contents.call(data);
          if (typeof result === 'string') {
            this.indent();
            text(safe ? result : this.esc(result));
            if (data.format) {
              text('\n');
            }
          }
          this.tabs--;
          return this.indent();
      }
    },
    render_tag: function(name, idclass, attrs, inline, contents) {
      this.indent();
      text("<" + name);
      if (idclass) {
        this.render_idclass(idclass);
      }
      if (attrs) {
        this.render_attrs(attrs);
      }
      if (inline) {
        text(" " + inline);
      }
      if (__indexOf.call(this.self_closing, name) >= 0) {
        text(' />');
        if (data.format) {
          text('\n');
        }
      } else {
        text('>');
        this.render_contents(contents);
        text("</" + name + ">");
        if (data.format) {
          text('\n');
        }
      }
      return null;
    }
  };
  tag = function() {
    var a, args, attrs, contents, first, idclass, inline, name, _i, _len;
    name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      a = args[_i];
      switch (typeof a) {
        case 'function':
          contents = a;
          break;
        case 'object':
          attrs = a;
          break;
        case 'number':
        case 'boolean':
          contents = a;
          break;
        case 'string':
          if (args.length === 1) {
            contents = a;
          } else {
            if (a === args[0]) {
              first = a.charAt(0);
              if (first === '#' || first === '.') {
                idclass = a.substr(0, a.indexOf(' '));
                inline = a.substr(a.indexOf(' ') + 1);
                if (idclass === '') {
                  idclass = inline;
                  inline = void 0;
                }
              } else {
                inline = a;
                if (inline === '') {
                  inline = void 0;
                }
              }
            } else {
              contents = a;
            }
          }
      }
    }
    return __cc.render_tag(name, idclass, attrs, inline, contents);
  };
  cede = function(f) {
    var old_buffer, temp_buffer;
    temp_buffer = [];
    old_buffer = __cc.buffer;
    __cc.buffer = temp_buffer;
    f();
    __cc.buffer = old_buffer;
    return temp_buffer.join('');
  };
  h = function(txt) {
    return txt.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  doctype = function(type) {
    if (type == null) {
      type = 'default';
    }
    text(__cc.doctypes[type]);
    if (data.format) {
      return text('\n');
    }
  };
  text = function(txt) {
    __cc.buffer.push(txt.toString());
    return null;
  };
  comment = function(cmt) {
    text("<!--" + cmt + "-->");
    if (data.format) {
      return text('\n');
    }
  };
  coffeescript = function(param) {
    switch (typeof param) {
      case 'function':
        return script("" + __cc.coffeescript_helpers + "(" + param + ").call(this);");
      case 'string':
        return script({
          type: 'text/coffeescript'
        }, function() {
          return param;
        });
      case 'object':
        param.type = 'text/coffeescript';
        return script(param);
    }
  };
  stylus = function(s) {
    if (data.stylus == null) {
      throw new TemplateError('stylus is not available');
    }
    text('<style>');
    if (data.format) {
      text('\n');
    }
    data.stylus.render(s, {
      compress: !data.format
    }, function(err, css) {
      if (err) {
        throw err;
      }
      return text(css);
    });
    text('</style>');
    if (data.format) {
      return text('\n');
    }
  };
  ie = function(condition, contents) {
    __cc.indent();
    text("<!--[if " + condition + "]>");
    __cc.render_contents(contents);
    text("<![endif]-->");
    if (data.format) {
      return text('\n');
    }
  };
  __cc.doctypes = {"5":"<!DOCTYPE html>","default":"<!DOCTYPE html>","xml":"<?xml version=\"1.0\" encoding=\"utf-8\" ?>","transitional":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">","strict":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">","frameset":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\">","1.1":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">","basic":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML Basic 1.1//EN\" \"http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd\">","mobile":"<!DOCTYPE html PUBLIC \"-//WAPFORUM//DTD XHTML Mobile 1.2//EN\" \"http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd\">","ce":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"ce-html-1.0-transitional.dtd\">"};__cc.coffeescript_helpers = "var __slice = Array.prototype.slice;var __hasProp = Object.prototype.hasOwnProperty;var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };var __extends = function(child, parent) {  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }  function ctor() { this.constructor = child; }  ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype;  return child; };var __indexOf = Array.prototype.indexOf || function(item) {  for (var i = 0, l = this.length; i < l; i++) {    if (this[i] === item) return i;  } return -1; };";__cc.self_closing = ["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","basefont","frame"];with(data.locals){(function(){
}).call(data);}return __cc.buffer.join('');
}