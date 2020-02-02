/* $Id: common.js, v1.0 2019/11/30 VaderDarth Exp $
 * OpenCPN dashboard_tactics plug-in / WebKit based instruments
 * Licensed under MIT - see distribution.
 */
/* >>>> If you plan to modify this file, please make a backup first! <<<< */
/* ---- Find a path missing? 
 Contribute/report here, please: https://git.io/JejKQ
 - with a screenshot and a short description of your installation, thanks!
 SignalK Path keys: https://git.io/JvsYw
 The Signal K values are always in SI units (like m/s, not knots).
 Conversion to a wanted unit is made with multipier/division/offset.
 (Avoid using floating point values like 0.000000003 in JavaScript!)
 Usage: for example, enginedjg/index.html loads a minimized version, common.min.js
        - make a copy of common.min.js and replace it with this one;
        - or, modify enginedjg/index.html to load your own file, no problem!
        - issues? open the index.html in a browser, hit Shift+Ctrl+I and reload;
                  * Console gives you the reason why it does not load anymore
        - note: next update/reinstallation overrides your changes, keep backups!
*/

var  instrustat = {
    theme : 'default',
    debuglevel : 4,
    alerts : true,
    alertdelay : 5,
    knownpaths: [
        {
            version    : 1,
            path       : 'propulsion.*.revolutions',
            title      : 'Engine Speed',
            symbol     : '',
            unit       : 'r.p.m.',
            display    : 'dial',
            decimals   : 0,
            minval     : 0,
            loalert    : 0,
            hialert    : 0,
            maxval     : 3000,
            multiplier : 60,
            divider    : 1,
            offset     : 0
        },
        {
            version    : 1,
            path       : 'propulsion.*.temperature',
            title      : 'Engine Temperature',
            symbol     : '°',
            unit       : 'Celsius',
            display    : 'dial',
            decimals   : 0,
            minval     : 0,
            loalert    : 0,
            hialert    : 95,
            maxval     : 100,
            multiplier : 1,
            divider    : 1,
            offset     : -273.2
        },
        {
            version    : 1,
            path       : 'propulsion.*.oilPressure',
            title      : 'Oil Pressure',
            symbol     : '',
            unit       : 'bar',
            display    : 'dial',
            decimals   : 1,
            minval     : 0,
            loalert    : 1,
            hialert    : 0,
            maxval     : 4,
            multiplier : 1,
            divider    : 100000,
            offset     : 0
        },
    ],
    // --- Do not modify below this line ---
    hasPathEntry: function ( path ) {
        var paths  = path.split('.')
        for ( var i = 0; i < this.knownpaths.length; i++  ) {
            var pathk = this.knownpaths[ parseInt(i) ].path
            var pathks = pathk.split('.')
            if ( paths.length !== pathks.length )
                continue
            var bAllMatch = true
            for ( var j = 0; j < pathks.length; j++ )
                if ( pathks[parseInt(j)] !== '*' )
                    if ( pathks[parseInt(j)] !== paths[parseInt(j)] ) {
                        bAllMatch = false
                        continue
                    }
            if ( bAllMatch )
                return parseInt(i)
        }
        return -1
    },
    skpathlookup: function ( path ) {
        var i = this.hasPathEntry( path )
        if ( i < 0 )
            return null
        return {
            version    : this.knownpaths[ parseInt(i) ].version,
            path       : this.knownpaths[ parseInt(i) ].path,
            title      : this.knownpaths[ parseInt(i) ].title,
            symbol     : this.knownpaths[ parseInt(i) ].symbol,
            unit       : this.knownpaths[ parseInt(i) ].unit,
            display    : this.knownpaths[ parseInt(i) ].display,
            decimals   : this.knownpaths[ parseInt(i) ].decimals,
            minval     : this.knownpaths[ parseInt(i) ].minval,
            loalert    : this.knownpaths[ parseInt(i) ].loalert,
            hialert    : this.knownpaths[ parseInt(i) ].hialert,
            maxval     : this.knownpaths[ parseInt(i) ].maxval,
            multiplier : this.knownpaths[ parseInt(i) ].multiplier,
            divider    : this.knownpaths[ parseInt(i) ].divider,
            offset     : this.knownpaths[ parseInt(i) ].offset
        }
    }
}
window.instrustat = instrustat
