/*
 * Copyright (c) 2014 gm9
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */

(function(){
    // import
    var igt = gm9.IngressGlyphTools;
    // レベル毎のグリフシーケンス
    // 小文字は読み方が曖昧な(自信がない)グリフ
    var SEQUENCES = [
        // Levels Discovered, Date Discovered, Sequence
        //L0
        //L1
        [0], 0, ["advance"],
        [0], 0, ["again"],
        [0], 0, ["all"],
        [0], 0, ["answer"],
        [0], 0, ["attack"],
        [0], 0, ["avoid"],
        [0], 0, ["barrier"],
        [0], 0, ["body"],
        [0], 0, ["breathe"],
        [0], 0, ["capture"],
        [0], 0, ["change"],
        [0], 0, ["chaos"],
        [0], 0, ["civilization"],
        [0], 0, ["clear"],
        [0], 0, ["clearall"],
        [0], 0, ["complex"],
        [0], 0, ["conflict"],
        [0], 0, ["contemplate"],
        [0], 0, ["courage"],
        [0], 0, ["create"],
        [0], 0, ["danger"],
        [0], 0, ["data"],
        [0], 0, ["defend"],
        [0], 0, ["destiny"],
        [0], 0, ["destroy"],
        [0], 0, ["deteriorate"],
        [0], 0, ["die"],
        [0], 0, ["difficult"],
        [0], 0, ["discover"],
        [0], 0, ["distance"],
        [0], 0, ["easy"],
        [0], 0, ["end"],
        [0], 0, ["enlightenment"],
        [0], 0, ["equal"],
        [0], 0, ["escape"],
        [0], 0, ["evolution"],
        [0], 0, ["failure"],
        [0], 0, ["fear"],
        [0], 0, ["follow"],
        [0], 0, ["forget"],
        [0], 0, ["future"],
        [0], 0, ["gain"],
        [0], 0, ["harm"],
        [0], 0, ["harmony"],
        [0], 0, ["have"],
        [0], 0, ["help"],
        [0], 0, ["hide"],
        [0], 0, ["human"],
        [0], 0, ["idea"],
        [0], 0, ["ignore"],
        [0], 0, ["imperfect"],
        [0], 0, ["improve"],
        [0], 0, ["impure"],
        [0], 0, ["inside"],
        [0], 0, ["journey"],
        [0], 0, ["lead"],
        [0], 0, ["less"],
        [0], 0, ["liberate"],
        [0], 0, ["lie"],
        [0], 0, ["lose"],
        [0], 0, ["message"],
        [0], 0, ["mind"],
        [0], 0, ["more"],
        [0], 0, ["nature"],
        [0], 0, ["new"],
        [0], 0, ["nourish"],
        [0], 0, ["old"],
        [0], 0, ["open"],
        [0], 0, ["openall"],
        [0], 0, ["past"],
        [0], 0, ["path"],
        [0], 0, ["perfection"],
        [0], 0, ["portal"],
        [0], 0, ["potential"],
        [0], 0, ["present"],
        [0], 0, ["pure"],
        [0], 0, ["pursue"],
        [0], 0, ["question"],
        [0], 0, ["react"],
        [0], 0, ["rebel"],
        [0], 0, ["repair"],
        [0], 0, ["resistance"],
        [0], 0, ["restraint"],
        [0], 0, ["retreat"],
        [0], 0, ["safety"],
        [0], 0, ["save"],
        [0], 0, ["search"],
        [0], 0, ["see"],
        [0], 0, ["self"],
        [0], 0, ["separate"],
        [0], 0, ["shapers"],
        [0], 0, ["simple"],
        [0], 0, ["soul"],
        [0], 0, ["stability"],
        [0], 0, ["strong"],
        [0], 0, ["together"],
        [0], 0, ["truth"],
        [0], 0, ["use"],
        [0], 0, ["want"],
        [0], 0, ["weak"],
        [0], 0, ["xm"],
        //L2
        //L3
        //L4
        // http://www.ingress.tv/2-glyph-hack-sequences.html
        [2], 0, ["all", "chaos"],
        [2], 0, ["attack", "chaos"],
        [2], 0, ["attack", "difficult"],
        [2], 0, ["capture", "portal"],
        [2], 0, ["civilization", "chaos"],
        [2], 0, ["create", "danger"],
        [2], 0, ["discover", "lie"],
        [2], 0, ["discover", "portal"],
        [2], 0, ["discover", "safety"],
        [2], 0, ["lead", "enlightenment"],
        [2], 0, ["liberate", "xm"],
        [2], 0, ["nourish", "journey"],
        [2], 0, ["openall", "truth"],
        [2], 0, ["path", "perfection"],
        [2], 0, ["pure", "body"],
        [2], 0, ["pure", "human"],
        [2], 0, ["pure", "truth"],
        [2], 0, ["pursue", "truth"],
        [2], 0, ["pursue", "xm"],
        [2], 0, ["question", "war"],
        [2], 0, ["search", "past"],
        [2], 0, ["search", "potential"],
        [2], 0, ["seperate", "war"],
        //L5
        //L6
        [5], 0, ["ACCEPT", "HUMAN", "WEAK"],
        [5], 0, ["ADVANCE", "PURE", "TRUTH"],
        [5], 0, ["ALL", "CIVILIZATION", "CHAOS"],
        [5], 0, ["ATTACK", "SHAPERS", "CHAOS"],
        [5], 0, ["AVOID", "CHAOS", "SOUL"],
        [5], 0, ["AVOID", "DESTINY", "LIE"],
        [5], 0, ["AVOID", "PURE", "CHAOS"],
        [5], 0, ["COURAGE", "DESTINY", "REBEL"],
        [5], 0, ["DANGER", "CHANGE", "PAST"],
        [5], 0, ["DESTROY", "DIFFICULT", "BARRIER"],
        [5], 0, ["DESTROY", "IMPURE", "TRUTH"],
        [5], 0, ["DISCOVER", "RESISTANCE", "TRUTH"],
        [5], 0, ["DISCOVER", "SHAPERS", "ENLIGHTENMENT"],
        [5], 0, ["DISCOVER", "SHAPERS", "LIE"],
        [5], 0, ["DISCOVER", "SHAPERS", "MESSAGE"],
        [5], 0, ["ESCAPE", "IMPURE", "EVOLUTION"],
        [5], 0, ["ESCAPE", "IMPURE", "FUTURE"],
        [5], 0, ["FOLLOW", "PURE", "JOURNEY"],
        [5], 0, ["HARM", "DANGER", "AVOID"],
        [5], 0, ["HUMAN", "GAIN", "SAFETY"],
        [5], 0, ["IMPROVE", "ADVANCE", "PRESENT"],
        [5], 0, ["IMPROVE", "HUMAN", "SHAPERS"],
        [5], 0, ["INSIDE", "XM", "TRUTH"],
        [5], 0, ["JOURNEY", "INSIDE", "SOUL"],
        [5], 0, ["LEAD", "ENLIGHTENMENT", "CIVILIZATION"],
        [5], 0, ["LIBERATE", "HUMAN", "FUTURE"],
        [5], 0, ["PEACE", "SIMPLE", "JOURNEY"],
        [5], 0, ["PERFECTION", "PATH", "PEACE"],
        [5], 0, ["PURSUE", "PURE", "BODY"],
        [5], 0, ["QUESTION", "HIDE", "TRUTH"],
        [5], 0, ["REACT", "IMPURE", "CIVILIZATION"],
        [5], 0, ["RETREAT", "SEARCH", "SAFETY"],
        [5], 0, ["WAR", "DESTROY", "FUTURE"],
        [5], 0, ["XM", "NOURISH", "CIVILIZATION"],
        //L7
        [7], 0, ["ALL", "CHAOS", "INSIDE", "BODY"],
        [7], 0, ["ATTACK", "WEAK", "SHAPERS", "LIE"],
        [7], 0, ["BREATHE", "AGAIN", "JOURNEY", "AGAIN"],
        [7], 0, ["BREATHE", "NATURE", "PERFECTION", "HARMONY"],
        [7], 0, ["CAPTURE", "FEAR", "DISCOVER", "COURAGE"],
        [7], 0, ["CHANGE", "FUTURE", "CAPTURE", "DESTINY"],
        [7], 0, ["CHANGE", "HUMAN", "POTENTIAL", "USE"],
        [7], 0, ["CHAOS", "barrier", "SHAPERS", "PORTAL"],
        [7], 0, ["CLEAR", "MIND", "OPEN", "MIND"],
        [7], 0, ["CLEARALL", "OPENALL", "DISCOVER", "TRUTH"],
        [7], 0, ["CONTEMPLATE", "COMPLEX", "SHAPERS", "CIVILIZATION"],
        [7], 0, ["CONTEMPLATE", "SELF", "PATH", "TRUTH"],
        [7], 0, ["COURAGE", "attack", "shapers", "FUTURE"],
        [7], 0, ["CREATE", "DISTANCE", "IMPURE", "PATH"],
        [7], 0, ["CREATE", "FUTURE", "NOT", "WAR"],
        [7], 0, ["DEFEND", "MESSAGE", "ANSWER", "IDEA"],
        [7], 0, ["DESTROY", "DESTINY", "HUMAN", "LIE"],
        [7], 0, ["DETERIORATE", "HUMAN", "WEAK", "REBEL"],
        [7], 0, ["ESCAPE", "SIMPLE", "HUMAN", "FUTURE"],
        [7], 0, ["FOLLOW", "SHAPERS", "PORTAL", "MESSAGE"],
        [7], 0, ["FORGET", "CONFLICT", "ACCEPT", "WAR"],
        [7], 0, ["HARMONY", "PATH", "NOURISH", "PRESENT"],
        [7], 0, ["HELP", "GAIN", "CREATE", "PURSUE"],
        [7], 0, ["HIDE", "IMPURE", "HUMAN", "THOUGHT"],
        [7], 0, ["HUMAN", "HAVE", "IMPURE", "CIVILIZATION"],
        [7], 0, ["HUMAN", "PAST", "PRESENT", "FUTURE"],
        [7], 0, ["HUMAN", "SOUL", "STRONG", "PURE"],
        [7], 0, ["IGNORE", "HUMAN", "CHAOS", "LIE"],
        [7], 0, ["IMPROVE", "BODY", "MIND", "SOUL"],
        [7], 0, ["IMPROVE", "BODY", "PURSUE", "JOURNEY"],
        [7], 0, ["INSIDE", "MIND", "JOURNEY", "PERFECTION"],
        [7], 0, ["JOURNEY", "not", "IMPROVE", "SOUL"],
        [7], 0, ["LEAD", "PURSUE", "REACT", "DEFEND"],
        [7], 0, ["LESS", "SOUL", "MORE", "MIND"],
        [7], 0, ["LESS", "TRUTH", "MORE", "CHAOS"],
        [7], 0, ["LIBERATE", "XM", "PORTAL", "TOGETHER"],
        [7], 0, ["LOSE", "DANGER", "GAIN", "SAFETY"],
        [7], 0, ["NOURISH", "XM", "CREATE", "THOUGHT"],
        [7], 0, ["PAST", "AGAIN", "PRESENT", "AGAIN"],
        [7], 0, ["PATH", "RESTRAINT", "STRONG", "SAFETY"],
        [7], 0, ["PORTAL", "CHANGE", "CIVILIZATION", "END"],
        [7], 0, ["PORTAL", "DIE", "CIVILIZATION", "DIE"],
        [7], 0, ["QUESTION", "TRUTH", "GAIN", "FUTURE"],
        [7], 0, ["RESTRAINT", "FEAR", "AVOID", "DANGER"],
        [7], 0, ["RESTRAINT", "PATH", "GAIN", "HARMONY"],
        [7], 0, ["SEARCH", "DATA", "DISCOVER", "PATH"],
        [7], 0, ["SEARCH", "TRUTH", "SAVE", "CIVILIZATION"],
        [7], 0, ["SEARCH", "XM", "SAVE", "PORTAL"],
        [7], 0, ["SEE", "TRUTH", "SEE", "FUTURE"],
        [7], 0, ["SEPARATE", "WEAK", "IGNORE", "TRUTH"],
        [7], 0, ["SHAPERS", "CHAOS", "PURE", "HARM"],
        [7], 0, ["SHAPERS", "MESSAGE", "END", "CIVILIZATION"],
        [7], 0, ["SHAPERS", "MIND", "COMPLEX", "HARMONY"],
        [7], 0, ["SHAPERS", "PAST", "PRESENT", "FUTURE"],
        [7], 0, ["SHAPERS", "SEE", "POTENTIAL", "EVOLUTION"],
        [7], 0, ["SIMPLE", "CIVILIZATION", "IMPURE", "WEAK"],
        [7], 0, ["SIMPLE", "MESSAGE", "COMPLEX", "IDEA"],
        [7], 0, ["SIMPLE", "TRUTH", "BREATHE", "NATURE"],
        [7], 0, ["SOUL", "REBEL", "HUMAN", "DIE"],
        [7], 0, ["STAY", "TOGETHER", "DEFEND", "TRUTH"],
        [7], 0, ["STRONG", "IDEA", "PURSUE", "TRUTH"],
        [7], 0, ["STRONG", "TOGETHER", "AVOID", "WAR"],
        [7], 0, ["STRUGGLE", "DEFEND", "SHAPERS", "DANGER"],
        [7], 0, ["STRUGGLE", "IMPROVE", "HUMAN", "SOUL"],
        [7], 0, ["TOGETHER", "DISCOVER", "HARMONY", "EQUAL"],
        [7], 0, ["TRUTH", "IDEA", "DISCOVER", "XM"],
        [7], 0, ["XM", "DIE", "CHAOS", "LIVE"],
        //L8
        [8], 20161029, ["ABANDON", "ALL", "TECHNOLOGY", "SAVE", "US"], //https://fevgames.net/new-ingress-glyphs/
        [8], 20161029, ["ABANDON", "FEAR", "DEFEND", "FUTURE", "TOGETHER"], //https://fevgames.net/new-ingress-glyphs/
        [8], 20161029, ["ABANDON", "FEAR", "SEE", "FUTURE", "DESTINATION"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["ADVANCE", "CIVILIZATION", "PURSUE", "SHAPERS", "PATH"],
        [8], 20161029, ["ANSWER", "N'ZEER", "QUESTION", "POTENTIAL", "KNOWLEDGE"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["ANSWER", "QUESTION", "DISCOVER", "DIFFICULT", "TRUTH"],
        [8], 0, ["AVOID", "CHAOS", "AVOID", "SHAPERS", "LIE"],
        [8], 0, ["AVOID", "CHAOS", "REPAIR", "POTENTIAL", "WAR"],
        [8], 0, ["AVOID", "PERFECTION", "STAY", "HUMAN", "SELF"],
        [8], 20161029, ["BEGIN", "JOURNEY", "breathe", "XM", "EVOLUTION"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["breathe", "inside", "XM", "lose", "SELF"],
        [8], 0, ["CAPTURE", "PORTAL", "DEFEND", "PORTAL", "COURAGE"],
        [8], 20161029, ["CHANGE", "PERSPECTIVE", "BEGIN", "NEW", "STRUGGLE"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["CHAOS", "WAR", "CONFLICT", "DISCOVER", "PEACE"],
        [8], 0, ["civilization", "die", "new", "civilization", "BEGIN"],
        [8], 0, ["clear", "mind", "liberate", "barrier", "BODY"],
        [8], 0, ["clearall", "idea", "past", "present", "FUTURE"],
        [8], 0, ["CONTEMPLATE", "FUTURE", "NOT", "SHAPERS", "PATH"],
        [8], 0, ["contemplate", "restraint", "discover", "more", "COURAGE"],
        [8], 0, ["COURAGE", "ATTACK", "SHAPERS", "PORTAL", "TOGETHER"],
        [8], 20151120, ["CREATE", "NEW", "FUTURE", "SEE", "ALL"],
        [8], 20161029, ["CREATE", "NEW", "PORTAL", "POTENTIAL", "FUTURE"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["create", "pure", "future", "human", "civilization"],
        [8], 0, ["create", "pure", "future", "not", "WAR"],
        [8], 0, ["CREATE", "SEPARATE", "PATH", "END", "JOURNEY"],
        [8], 0, ["DEFEND", "DESTINY", "DEFEND", "HUMAN", "CIVILIZATION"],
        [8], 0, ["DEFEND", "HUMAN", "CIVILIZATION", "XM", "MESSAGE"],
        [8], 0, ["DEFEND", "HUMAN", "CIVILIZATION", "PORTAL", "DATA"],
        [8], 0, ["DEFEND", "HUMAN", "CIVILIZATION", "SHAPERS", "LIE"],
        [8], 0, ["DEFEND", "HUMAN", "CIVILIZATION", "SHAPERS", "PORTAL"],
        [8], 0, ["DESTROY", "CIVILIZATION", "END", "CONFLICT", "WAR"],
        [8], 0, ["destroy", "lie", "not", "gain", "SOUL"],
        [8], 0, ["DISTANCE", "SELF", "AVOID", "HUMAN", "LIE"],
        [8], 0, ["EASY", "PATH", "FUTURE", "FOLLOW", "SHAPERS"],
        [8], 0, ["END", "OLD", "CIVILIZATION", "CREATE", "NEW"],
        [8], 0, ["ESCAPE", "BODY", "JOURNEY", "OUTSIDE", "PRESENT"],
        [8], 0, ["ESCAPE", "BODY", "MIND", "SELF", "WANT"],
        [8], 0, ["FORGET", "WAR", "SEE", "DISTANCE", "HARMONY"],
        [8], 0, ["FORGET", "PAST", "SEE", "PRESENT", "DANGER"],
        [8], 0, ["gain", "truth", "open", "human", "SOUL"],
        [8], 20151120, ["GROW", "UNBOUNDED", "CREATE", "NEW", "FUTURE"],
        [8], 0, ["HARM", "PROGRESS", "PURSUE", "MORE", "WAR"],
        [8], 0, ["HELP", "ENLIGHTENMENT", "CAPTURE", "ALL", "PORTAL"],
        [8], 0, ["HELP", "HUMAN", "CIVILIZATION", "PURSUE", "DESTINY"],
        [8], 20161029, ["HELP", "US", "SAVE", "US", "ALL"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["help", "resistance", "capture", "all", "PORTAL"],
        [8], 0, ["HIDE", "STRUGGLE", "ADVANCE", "STRONG", "TOGETHER"],
        [8], 20161029, ["HUMAN", "LEGACY", "ABANDON", "OLD", "KNOWLEDGE"], //https://fevgames.net/new-ingress-glyphs/
        [8], 20161029, ["HUMAN", "LEGACY", "HAVE", "ABANDON", "now"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["human", "not", "together", "civilization", "deteriorate"],
        [8], 0, ["HUMAN", "SHAPERS", "TOGETHER", "CREATE", "DESTINY"],
        [8], 20161029, ["IMPERFECT", "MESSAGE", "BEGIN", "HUMAN", "CHAOS"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["IMPERFECT", "TRUTH", "ACCEPT", "COMPLEX", "ANSWER"],
        [8], 0, ["IMPERFECT", "XM", "MESSAGE", "HUMAN", "CHAOS"],
        [8], 0, ["INSIDE", "MIND", "INSIDE", "SOUL", "HARMONY"],
        [8], 0, ["liberate", "portal", "liberate", "human", "MIND"],
        [8], 0, ["liberate", "self", "liberate", "human", "CIVILIZATION"],
        [8], 0, ["LOSE", "SHAPERS", "MESSAGE", "GAIN", "CHAOS"],
        [8], 0, ["MIND", "BODY", "SOUL", "PURE", "HUMAN"],
        [8], 0, ["more", "data", "gain", "portal", "ADVANCE"],
        [8], 0, ["old", "nature", "less", "strong", "present"],
        [8], 0, ["past", "chaos", "create", "future", "HARMONY"],
        [8], 0, ["PAST", "PATH", "CREATE", "FUTURE", "JOURNEY"],
        [8], 0, ["PORTAL", "BARRIER", "DEFEND", "HUMAN", "SHAPERS"],
        [8], 0, ["portal", "create", "danger", "pursue", "SAFETY"],
        [8], 0, ["PORTAL", "IMPROVE", "HUMAN", "FUTURE", "CIVILIZATION"],
        [8], 0, ["PORTAL", "POTENTIAL", "HELP", "HUMAN", "FUTURE"],
        [8], 0, ["PRESENT", "CHAOS", "CREATE", "FUTURE", "CIVILIZATION"],
        [8], 0, ["PURE", "HUMAN", "FAILURE", "NOW", "CHAOS"],
        [8], 0, ["PURSUE", "CONFLICT", "WAR", "ADVANCE", "CHAOS"],
        [8], 0, ["PURSUE", "PATH", "OUTSIDE", "SHAPERS", "LIE"],
        [8], 0, ["QUESTION", "LESS", "FORGET", "ALL", "LIE"],
        [8], 0, ["REACT", "REBEL", "QUESTION", "SHAPERS", "LIE"],
        [8], 0, ["REBEL", "THOUGHT", "EVOLUTION", "DESTINY", "NOW"],
        [8], 0, ["REPAIR", "PRESENT", "REPAIR", "HUMAN", "SOUL"],
        [8], 0, ["REPAIR", "SOUL", "LESS", "HUMAN", "HARM"],
        [8], 0, ["save", "human", "civilization", "destroy", "PORTAL"],
        [8], 0, ["SEARCH", "DESTINY", "CREATE", "PURE", "FUTURE"],
        [8], 20161029, ["SEE", "TRUTH", "SEE", "FUTURE", "BEGIN"], //https://fevgames.net/new-ingress-glyphs/
        [8], 0, ["separate", "mind", "body", "discover", "ENLIGHTENMENT"],
        [8], 0, ["SEPARATE", "TRUTH", "LIE", "SHAPERS", "FUTURE"],
        [8], 0, ["SHAPERS", "LEAD", "HUMAN", "COMPLEX", "JOURNEY"],
        [8], 0, ["SHAPERS", "PORTAL", "DATA", "CREATE", "CHAOS"],
        [8], 0, ["SHAPERS", "PORTAL", "MESSAGE", "DESTROY", "CIVILIZATION"],
        [8], 0, ["shapers", "see", "complex", "path", "DESTINY"],
        [8], 0, ["SHAPERS", "WANT", "HUMAN", "MIND", "FUTURE"],
        [8], 0, ["SIMPLE", "OLD", "TRUTH", "JOURNEY", "INSIDE"],
        [8], 0, ["simple", "truth", "forget", "easy", "SUCCESS"],
        [8], 0, ["simple", "truth", "shapers", "destroy", "civilization"],
        [8], 0, ["STAY", "STRONG", "TOGETHER", "DEFEND", "RESISTANCE"],
        [8], 0, ["STRONG", "TOGETHER", "WAR", "TOGETHER", "CHAOS"],
        [8], 0, ["STRONG", "TOGETHER", "WAR", "TOGETHER", "DESTINY"],
        [8], 20151120, ["TECHNOLOGY", "INTELLIGENCE", "SEE", "ALL", "UNBOUNDED"],
        [8], 0, ["use", "mind", "use", "courage", "CHANGE"],
        [8], 0, ["USE", "RESTRAINT", "FOLLOW", "EASY", "PATH"],
        [8], 0, ["WANT", "TRUTH", "PURSUE", "DIFFICULT", "PATH"],
        [8], 0, ["weak", "human", "destiny", "destroy", "CIVILIZATION"],
        [8], 0, ["XM", "CREATE", "COMPLEX", "HUMAN", "DESTINY"],
        //[8], 0, ["XM", "create", "complex", "shapers", "DESTINY"],
        [8], 0, ["XM", "PATH", "FUTURE", "DESTINY", "HARMONY"]
    ];

    var INFOS = [];
    var LEVEL_INFOS = [[],[],[],[],[],[],[],[],[]];
    var LEVEL_SEQUENCES = [[],[],[],[],[],[],[],[],[]];
    for(var si = 0; si < SEQUENCES.length; si += 3){
        // resolve aaa(bbb) notation
        var seqLevels = SEQUENCES[si+0];
        var seqDiscovered = SEQUENCES[si+1];
        var seqWordGlyphArray = SEQUENCES[si+2].map(
            function(str){return igt.glyphDic.getWordGlyphFromString(str);});

        var info = {
            levels: seqLevels,
            dateDiscovered: seqDiscovered,
            sequence: seqWordGlyphArray
        };
        INFOS.push(info);
        for(var li = 0; li < info.levels.length; ++li){
            LEVEL_INFOS[info.levels[li]].push(info);
            LEVEL_SEQUENCES[info.levels[li]].push(info.sequence);
        }
    }

    function getInfoRandom(lv){
        var seqs = LEVEL_INFOS[lv];
        return seqs && seqs.length > 0 ? seqs[Math.floor(Math.random() * seqs.length)] : null;
    }

    igt.sequenceDic = {
        getSequences: function(lv){ return LEVEL_SEQUENCES[lv];},
        getSequencesInfo: function(lv){ return typeof(lv) == "number" ? LEVEL_INFOS[lv] : INFOS;},
        getSequenceRandom: function(lv){
            var info = getInfoRandom(lv);
            return info ? info.sequence : null;
        },
        getSequenceInfoRandom: function(lv){
            return getInfoRandom(lv);
        }
    };
})();
