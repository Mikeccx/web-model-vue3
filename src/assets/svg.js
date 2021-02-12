/* eslint-disable */
!(function(e) {
    var t,
        n,
        o,
        i,
        d,
        c,
        a =
            '<svg><symbol id="icon-houtui" viewBox="0 0 1024 1024"><path d="M230.8608 544l198.8096 198.8096a32 32 0 0 1-45.2608 45.2608l-249.856-249.856a37.12 37.12 0 0 1 0-52.48l249.856-249.8048a32 32 0 0 1 45.2608 45.2608L230.8608 480H870.4a32 32 0 1 1 0 64H230.8608z"  ></path></symbol></svg>',
        l = (l = document.getElementsByTagName('script'))[l.length - 1].getAttribute(
            'data-injectcss'
        )
    if (l && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0
        try {
            document.write(
                '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
            )
        } catch (e) {
            console && console.log(e)
        }
    }
    function s() {
        d || ((d = !0), o())
    }
    ;(t = function() {
        var e, t, n, o
        ;((o = document.createElement('div')).innerHTML = a),
            (a = null),
            (n = o.getElementsByTagName('svg')[0]) &&
                (n.setAttribute('aria-hidden', 'true'),
                (n.style.position = 'absolute'),
                (n.style.width = 0),
                (n.style.height = 0),
                (n.style.overflow = 'hidden'),
                (e = n),
                (t = document.body).firstChild
                    ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
                    : t.appendChild(e))
    }),
        document.addEventListener
            ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
                ? setTimeout(t, 0)
                : ((n = function() {
                      document.removeEventListener('DOMContentLoaded', n, !1), t()
                  }),
                  document.addEventListener('DOMContentLoaded', n, !1))
            : document.attachEvent &&
              ((o = t),
              (i = e.document),
              (d = !1),
              (c = function() {
                  try {
                      i.documentElement.doScroll('left')
                  } catch (e) {
                      return void setTimeout(c, 50)
                  }
                  s()
              })(),
              (i.onreadystatechange = function() {
                  'complete' == i.readyState && ((i.onreadystatechange = null), s())
              }))
})(window)
