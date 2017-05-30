#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import os

directory = 'test'
nombreAntiguo = 'seedApp'
nombreNuevo = ''

try:
    nombreAntiguo = sys.argv[2]
except IndexError:
    pass

try:
    for directory in ['app','test','dist']:
        nombreNuevo = sys.argv[1]
        for dname, dirs, files in os.walk(directory):
            for fname in files:
                fpath = os.path.join(dname, fname)
                with open(fpath) as f:
                    s = f.read()
                s = s.replace(nombreAntiguo, nombreNuevo)
                s.replace
                with open(fpath, "w") as f:
                    f.write(s)

    for fpath in ['Gruntfile.js','bower.json','index.html']:
        with open(fpath) as f:
            s = f.read()
        s = s.replace(nombreAntiguo, nombreNuevo)
        s.replace
        with open(fpath, "w") as f:
            f.write(s)

    sys.exit(0)
except IndexError:
    print "uso: " + sys.argv[0] + " nombreNuevo [nombreAntiguo]"
    print "nombreNuevo: obligatorio"
    print "nombreAntiguo: opcional (default:seedApp)"
    sys.exit(1)


