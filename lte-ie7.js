/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Gobblicons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-share' : '&#xe000;',
			'icon-add-circle' : '&#xe001;',
			'icon-search' : '&#xe002;',
			'icon-edit' : '&#xe003;',
			'icon-download' : '&#xe004;',
			'icon-trash' : '&#xe005;',
			'icon-file-next' : '&#xe006;',
			'icon-file-add' : '&#xe007;',
			'icon-file' : '&#xe008;',
			'icon-add' : '&#xe009;',
			'icon-right' : '&#xe00a;',
			'icon-left' : '&#xe00b;',
			'icon-down' : '&#xe00c;',
			'icon-close' : '&#xe00d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};