/* $Id: siface.js, v1.0 2019/11/30 VaderDarth Exp $
 * OpenCPN dashboard_tactics plug-in
 * Licensed under MIT - see distribution.
 */
var ifacedbglevel = window.instrustat.debuglevel

// import sanitizer code port
var escapeHTML = require('./escapeHTML')
var Sanitizer = escapeHTML.default()

var iface = {
    eventsetid    : null,
    elemsetid     : null,
    uid           : '',
    regeventsetid: function ( newelem, newevent ) {
        this.elemsetid = newelem
        this.eventsetid = newevent
    },
    setid: function( newuid ) {
        this.uid = newuid
        if ( (this.eventsetid === null) || (this.elemsetid === null) )
            return
        this.elemsetid.dispatchEvent( this.eventsetid )
    },
    getid: function() {
        if ( (this.uid === null) || (this.uid === '') )
            return ''
        this.clearFlag( this.elemsetid )
        return this.uid
    },
    eventsetall    : null,
    elemsetall     : null,
    allpaths       : [],
    regeventsetall: function ( newelem, newevent ) {
        this.elemsetall = newelem
        this.eventsetall = newevent
    },
    setall: function( alist ) {
        var emptylist = []
        this.allpaths = emptylist
        var varlistitems = alist.split(',')
        for ( var i = 0; i < varlistitems.length; i++ ) {
            this.allpaths.push( varlistitems[ parseInt(i) ] )
        }
        if ( (this.eventsetall === null) || (this.elemsetall === null) )
            return
        this.elemsetall.dispatchEvent( this.eventsetall )
    },
    getall: function() {
        if ( this.allpaths.length === 0 )
            return []
        this.clearFlag( this.elemsetall )
        return this.allpaths
    },
    eventsetalldb : null,
    elemsetalldb  : null,
    allpathsdb    : [],
    regeventsetalldb: function ( newelem, newevent ) {
        this.elemsetalldb = newelem
        this.eventsetalldb = newevent
    },
    setalldb: function( alist ) {
        var emptylist = []
        this.allpathsdb = emptylist
        var varlistitems = alist.split(',')
        for ( var i = 0; i < varlistitems.length; i++ ) {
            this.allpathsdb.push( varlistitems[ parseInt(i) ] )
        }
        if ( (this.eventsetalldb === null) || (this.elemsetalldb === null) )
            return
        this.elemsetalldb.dispatchEvent( this.eventsetalldb )
    },
    getalldb: function() {
        if ( this.allpathsdb.length === 0 )
            return []
        this.clearFlag( this.elemsetalldb )
        return this.allpathsdb
    },
    eventrescan : null,
    elemrescan  : null,
    regeventrescan: function ( newelem, newevent ) {
        this.elemrescan = newelem
        this.eventrescan = newevent
    },
    setrescan: function() {
        if ( (this.eventrescan === null) || (this.elemrescan === null) )
            return
        this.elemrescan.dispatchEvent( this.eventrescan )
    },
    eventselected    : null,
    elemselected     : null,
    selectedpath     : '',
    regeventselected: function ( newelem, newevent ) {
        this.elemselected = newelem
        this.eventselected = newevent
    },
    setselected: function( newpath ) {
        try {
            if ( (this.eventselected === null) || (this.elemselected === null) )
                return
            this.selectedpath = newpath
            if ( ifacedbglevel > 0 )
                console.log('iface.setselected - selectedpath: ', this.selectedpath)
            this.elemselected.dispatchEvent( this.eventselected )
        }
        catch (error) {
            this.selectedpath = ''
            if ( ifacedbglevel > 1 )
                console.log('iface.setselected - state machine error',
                            error)
            return
        }
    },
    getselected: function() {
        if ( (this.selectedpath === null) || (this.selectedpath === '') )
            return ''
        return this.selectedpath
    },
    eventacksubs    : null,
    elemacksubs     : null,
    acksubspath     : '',
    regeventacksubs: function ( newelem, newevent ) {
        this.elemacksubs = newelem
        this.eventacksubs = newevent
    },
    acksubs: function( forpath ) {
        try {
            if ( (this.eventacksubs === null) || (this.elemacksubs === null) )
                return
            this.acksubspath = forpath
            if ( ifacedbglevel > 0 )
                console.log('iface.setacksubs - acksubspath: ', this.acksubspath)
            this.elemacksubs.dispatchEvent( this.eventacksubs )
        }
        catch (error) {
            this.acksubspath = ''
            if ( ifacedbglevel > 1 )
                console.log('iface.setacksubs - state machine error',
                            error)
            return
        }
    },
    getacksubs: function() {
        if ( (this.acksubspath === null) || (this.acksubspath === '') )
            return ''
        return this.acksubspath
    },
    eventackschema    : null,
    elemackschema     : null,
    dbschema          : '',
    regeventackschema: function ( newelem, newevent ) {
        this.elemackschema = newelem
        this.eventackschema = newevent
    },
    ackschema: function( newschema ) {
        try {
            if ( (this.eventackschema === null) || (this.elemackschema === null) )
                return
            this.dbschema = newschema
            if ( ifacedbglevel > 0 )
                console.log('iface.setackschema - ackschema: ', this.dbschema)
            this.elemackschema.dispatchEvent( this.eventackschema )
        }
        catch (error) {
            this.dbschema = ''
            if ( ifacedbglevel > 1 )
                console.log('iface.setackschema - state machine error',
                            error)
            return
        }
    },
    getdbschema: function() {
        if ( (this.dbschema === null) || (this.dbschema === '') )
            return ''
        return this.dbschema
    },
    eventgetnew    : null,
    elemgetnew     : null,
    regeventgetnew: function ( newelem, newevent ) {
        this.elemgetnew = newelem
        this.eventgetnew = newevent
    },
    setgetnew: function() {
        try {
            if ( (this.eventgetnew === null) || (this.elemgetnew === null) )
                return
            this.elemgetnew.dispatchEvent( this.eventgetnew )
        }
        catch (error) {
            if ( ifacedbglevel > 1 )
                console.log('iface.setgetnew - state machine error',
                            error)
            return
        }
    },
    eventchgconf    : null,
    elemchgconf     : null,
    chgconfpath     : '',
    regeventchgconf: function ( newelem, newevent ) {
        this.elemchgconf = newelem
        this.eventchgconf = newevent
    },
    setchgconf: function( newpath ) {
        try {
            if ( (this.eventchgconf === null) || (this.elemchgconf === null) )
                return
            this.chgconfpath = newpath
            if ( ifacedbglevel > 0 )
                console.log('iface.setchgconf - chgconfpath: ', this.chgconfpath)
            this.elemchgconf.dispatchEvent( this.eventchgconf )
        }
        catch (error) {
            this.chgconfpath = ''
            if ( ifacedbglevel > 1 )
                console.log('iface.setchgconf - state machine error',
                            error)
            return
        }
    },
    getchgconf: function() {
        if ( (this.chgconfpath === null) || (this.chgconfpath === '') )
            return ''
        return this.chgconfpath
    },
    eventnewdata    : null,
    elemnewdata     : null,
    value           : 0.0,
    regeventnewdata: function ( newelem, newevent ) {
        this.elemnewdata = newelem
        this.eventnewdata = newevent
    },
    newdata: function( newvalue ) {
        this.value = newvalue
        if ( (this.eventnewdata === null) || (this.elemnewdata === null) )
            return
        this.elemnewdata.dispatchEvent( this.eventnewdata )
    },
    getdata: function() {
        if ( this.value === null )
            return 0.0
        return this.value
    },
    eventerrdata    : null,
    elemerrdata     : null,
    regeventerrdata: function ( newelem, newevent ) {
        this.elemerrdata = newelem
        this.eventerrdata = newevent
    },
    seterrdata: function() {
        if ( (this.eventerrdata === null) || (this.elemerrdata === null) )
            return
        this.elemerrdata.dispatchEvent( this.eventerrdata )
    },
    eventretryget    : null,
    elemretryget     : null,
    regeventretryget: function ( newelem, newevent ) {
        this.elemretryget = newelem
        this.eventretryget = newevent
    },
    setretryget: function() {
        if ( (this.eventretryget === null) || (this.elemretryget === null) )
            return
        this.elemretryget.dispatchEvent( this.eventretryget )
    },
    eventswapdisp    : null,
    elemswapdisp     : null,
    swapdirection    : 0,
    regeventswapdisp: function ( newelem, newevent ) {
        this.elemswapdisp = newelem
        this.eventswapdisp = newevent
    },
    setswapdisp: function( newswapdirection ) {
        try {
            if ( (this.eventswapdisp === null) || (this.elemswapdisp === null) )
                return
            this.swapdirection = newswapdirection
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setswapdisp - swapdirection: ', this.swapdirection)
            this.elemswapdisp.dispatchEvent( this.eventswapdisp )
        }
        catch (error) {
            this.swapdirection = 0
            if ( ifacedbglevel > 1 )
                console.log('iface.setswapdisp - state machine error',
                            error)
            return
        }
    },
    getswapdisp: function() {
        return this.swapdirection
    },
    eventgetfeet    : null,
    elemgetfeet     : null,
    eventnogetfeet  : null,
    elemnogetfeet   : null,
    getfeet         : false,
    regeventgetfeet: function ( newelem, newevent ) {
        this.elemgetfeet = newelem
        this.eventgetfeet = newevent
    },
    regeventnogetfeet: function ( newelem, newevent ) {
        this.elemnogetfeet = newelem
        this.eventnogetfeet = newevent
    },
    setgetfeet: function( newgetfeet ) {
        try {
            if ( (this.eventgetfeet === null) || (this.elemgetfeet === null) ||
                 (this.eventnogetfeet === null) || (this.elemnogetfeet === null) )
                return
            this.getfeet = newgetfeet
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setgetfeet - getfeet: ', this.getfeet)
            if ( this.getfeet ) {
                this.elemgetfeet.dispatchEvent( this.eventgetfeet )
            }
            else {
                this.elemnogetfeet.dispatchEvent( this.eventnogetfeet )
            }
        }
        catch (error) {
            this.getfeet = false
            if ( ifacedbglevel > 1 )
                console.log('iface.setgetfeet - state machine error',
                            error)
            return
        }
    },
    getgetfeet: function() {
        return this.getfeet
    },
    eventchkrdy    : null,
    elemchkrdy     : null,
    eventnochkrdy  : null,
    elemnochkrdy   : null,
    chkrdy         : false,
    regeventchkrdy: function ( newelem, newevent ) {
        this.elemchkrdy = newelem
        this.eventchkrdy = newevent
    },
    regeventnochkrdy: function ( newelem, newevent ) {
        this.elemnochkrdy = newelem
        this.eventnochkrdy = newevent
    },
    setchkrdy: function( newchkrdy ) {
        try {
            if ( (this.eventchkrdy === null) || (this.elemchkrdy === null) ||
                 (this.eventnochkrdy === null) || (this.elemnochkrdy === null) )
                return
            this.chkrdy = newchkrdy
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setchkrdy - chkrdy: ', this.chkrdy)
            if ( this.chkrdy ) {
                this.elemchkrdy.dispatchEvent( this.eventchkrdy )
            }
            else {
                this.elemnochkrdy.dispatchEvent( this.eventnochkrdy )
            }
        }
        catch (error) {
            this.chkrdy = false
            if ( ifacedbglevel > 1 )
                console.log('iface.setchkrdy - state machine error',
                            error)
            return
        }
    },
    getchkrdy: function() {
        return this.chkrdy
    },
    eventusersl    : null,
    elemusersl     : null,
    eventnousersl  : null,
    elemnousersl   : null,
    usersl         : false,
    regeventusersl: function ( newelem, newevent ) {
        this.elemusersl = newelem
        this.eventusersl = newevent
    },
    regeventnousersl: function ( newelem, newevent ) {
        this.elemnousersl = newelem
        this.eventnousersl = newevent
    },
    setusersl: function( newusersl ) {
        try {
            if ( (this.eventusersl === null) || (this.elemusersl === null) ||
                 (this.eventnousersl === null) || (this.elemnousersl === null) )
                return
            this.usersl = newusersl
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setusersl - usersl: ', this.usersl)
            if ( this.usersl ) {
                this.elemusersl.dispatchEvent( this.eventusersl )
            }
            else {
                this.elemnousersl.dispatchEvent( this.eventnousersl )
            }
        }
        catch (error) {
            this.usersl = false
            if ( ifacedbglevel > 1 )
                console.log('iface.setusersl - state machine error',
                            error)
            return
        }
    },
    getusersl: function() {
        return this.usersl
    },
    eventmarkack    : null,
    elemmarkack     : null,
    markacknowledged: false,
    regeventmarkack: function ( newelem, newevent ) {
        this.elemmarkack = newelem
        this.eventmarkack = newevent
    },
    setmarkack: function( newmarkacknowledged ) {
        try {
            if ( (this.eventmarkack === null) || (this.elemmarkack === null) )
                return
            this.markacknowledged = newmarkacknowledged
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setmarkack - markacknowledged: ', this.markacknowledged)
            this.elemmarkack.dispatchEvent( this.eventmarkack )
        }
        catch (error) {
            this.markacknowledged = 0
            if ( ifacedbglevel > 1 )
                console.log('iface.setmarkack - state machine error',
                            error)
            return
        }
    },
    getmarkack: function() {
        return this.markacknowledged
    },
    eventsldataack    : null,
    elemsldataack     : null,
    sldataacknowledged: false,
    regeventsldataack: function ( newelem, newevent ) {
        this.elemsldataack = newelem
        this.eventsldataack = newevent
    },
    setsldataack: function( newsldataacknowledged ) {
        try {
            if ( (this.eventsldataack === null) || (this.elemsldataack === null) )
                return
            this.sldataacknowledged = newsldataacknowledged
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setsldataack - sldataacknowledged: ', this.sldataacknowledged)
            this.elemsldataack.dispatchEvent( this.eventsldataack )
        }
        catch (error) {
            this.sldataacknowledged = 0
            if ( ifacedbglevel > 1 )
                console.log('iface.setsldataack - state machine error',
                            error)
            return
        }
    },
    getsldataack: function() {
        return this.sldataacknowledged
    },
    eventnewsldata    : null,
    elemnewsldata     : null,
    sldistancetogo    : -999.0,
    slclosestpoint    : -999.0,
    slwindbias        : -999.0,
    sladvantage       : -999.0,
    regeventnewsldata: function ( newelem, newevent ) {
        this.elemnewsldata = newelem
        this.eventnewsldata = newevent
    },
    newsldata: function( newsldistancetogo, newslclosestpoint,
                         newslwindbias, sladvantage) {
        this.sldistancetogo = newsldistancetogo
        this.slclosestpoint = newslclosestpoint
        this.slwindbias = newslwindbias
        this.sladvantage = sladvantage
        if ( (this.eventnewsldata === null) || (this.elemnewsldata === null) )
            return
        this.elemnewsldata.dispatchEvent( this.eventnewsldata )
    },
    getsldistancetogo: function() {
        return this.sldistancetogo
    },
    getslclosestpoint: function() {
        return this.slclosestpoint
    },
    getslwindbias: function() {
        return this.slwindbias
    },
    getsladvantage: function() {
        return this.sladvantage
    },
    eventsldstopack    : null,
    elemsldstopack     : null,
    sldstopacknowledged: false,
    regeventsldstopack: function ( newelem, newevent ) {
        this.elemsldstopack = newelem
        this.eventsldstopack = newevent
    },
    setsldstopack: function( newsldstopacknowledged ) {
        try {
            if ( (this.eventsldstopack === null) || (this.elemsldstopack === null) )
                return
            this.sldstopacknowledged = newsldstopacknowledged
            if ( ifacedbglevel > 0 )
                console.log(
                    'iface.setsldstopack - sldstopacknowledged: ', this.sldstopacknowledged)
            this.elemsldstopack.dispatchEvent( this.eventsldstopack )
        }
        catch (error) {
            this.sldstopacknowledged = 0
            if ( ifacedbglevel > 1 )
                console.log('iface.setsldstopack - state machine error',
                            error)
            return
        }
    },
    getsldstopack: function() {
        return this.sldstopacknowledged
    },
    eventluminsty : null,
    elemluminsty  : null,
    luminsty      : 'day',
    regeventluminsty: function ( newelem, newevent ) {
        this.elemluminsty = newelem
        this.eventluminsty = newevent
    },
    setluminsty: function( newluminsty ) {
        this.luminsty = newluminsty
        if ( (this.eventluminsty === null) || (this.elemluminsty === null) )
            return
        this.elemluminsty.dispatchEvent( this.eventluminsty )
    },
    getluminsty: function() {
        if ( (this.luminsty === null) || (this.luminsty === '') )
            return ''
        return this.luminsty
    },
    eventclosing    : null,
    elemclosing     : null,
    regeventclosing: function ( newelem, newevent ) {
        this.elemclosing = newelem
        this.eventclosing = newevent
    },
    setclosing: function() {
        try {
            if ( (this.eventclosing === null) || (this.elemclosing === null) )
                return
            if ( ifacedbglevel > 0 )
                console.log('iface.setclosing - closingpath: ', this.closingpath)
            this.elemclosing.dispatchEvent( this.eventclosing )
        }
        catch (error) {
            if ( ifacedbglevel > 1 )
                console.log('iface.setclosing - state machine error',
                            error)
            return
        }
    },
    graphwizdot      : '',
    setgraphwizdot: function( newgraphwizdot ) {
        this.graphwizdot = newgraphwizdot
    },
    getgraphwizdot: function() {
        if ( (this.graphwizdot === null) || (this.graphwizdot === '') )
            return 'not.available'
        return this.graphwizdot
    },
    setFlag: function( elemid, request ) {
        if ( ifacedbglevel > 1 ) console.log(
            'setFlag() elemid: ', elemid, ' request: ', request)
        var el = document.getElementById(elemid)
        var htmlCandidate = 'instrujs:' + request + '!'
        var htmlObj = Sanitizer.createSafeHTML(htmlCandidate)
        el.innerHTML = Sanitizer.unwrapSafeHTML(htmlObj)
        var doc = window.document
        var sel
        var range
        if (window.getSelection && doc.createRange) {
            sel = window.getSelection()
            range = doc.createRange()
            range.selectNodeContents(el)
            sel.removeAllRanges()
            sel.addRange(range)
        }
        else if (doc.body.createTextRange) {
            range = doc.body.createTextRange()
            range.moveToElementText(el)
            range.select()
        }
    },
    clearFlag: function( elemid ) {
        if ( ifacedbglevel > 1 ) console.log(
            'clearFlag(): elemid content before clean: ', elemid.innerHTML)
        if (window.getSelection) {
            window.getSelection().removeAllRanges()
        }
        else if (document.selection) {
            document.selection.empty()
        }
        elemid.innerHTML = ''
    },
    clearFlagById: function( id ) {
        var el = document.getElementById(id)
        this.clearFlag( el )
    }
}
window.iface = iface
