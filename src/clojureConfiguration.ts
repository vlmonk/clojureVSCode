'use strict';

import * as vscode from 'vscode';

const keywords = [
    'ns',
    'fn',
    'def',
    'defn',
    'bound\\-fn',
    'if',
    'if\\-not',
    'case,',
    'cond',
    'condp',
    'cond\\-\\>',
    'cond\\-\\>\\>',
    'when',
    'while',
    'when\\-not',
    'when\\-first',
    'do',
    'future',
    'comment',
    'doto',
    'locking',
    'proxy',
    'as\\-\\>',
    'reify',
    'deftype',
    'defrecord',
    'defprotocol',
    'extend',
    'extend-protocol',
    'extend-type',
    'specify',
    'specify\\!',
    'try',
    'catch',
    'finally',
    'let',
    'letfn',
    'binding',
    'loop',
    'for',
    'doseq',
    'dotimes',
    'when\\-let',
    'if\\-let',
    'when\\-some',
    'if\\-some',
    'this\\-as',
    'defmethod',
    'testing',
    'deftest',
    'are',
    'use\\-fixtures',
    'run',
    'run\\*',
    'fresh',
    'alt!',
    'alt!!',
    'go',
    'go\\-loop',
    'thread'
]

export class ClojureLanguageConfiguration implements vscode.LanguageConfiguration {
    wordPattern = /[\w\-\.:<>][\w\d\.\\/\-\?<>]+/;
    indentationRules = {
        decreaseIndentPattern: undefined,
        increaseIndentPattern: /^\s*\(.*[^)]\s*$/
    }
}