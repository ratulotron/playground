import imp
import pycountry
import gettext
import polib

# _ = gettext.gettext

# print(type())

# de = gettext.find("iso3166", pycountry.LOCALES_DIR, languages=["de"])

# print(de)


DE_EN_MOFILE = "./DE_EN_MOFILE.mo"
en_de_PO = polib.mofile(
    str(gettext.find("iso3166", pycountry.LOCALES_DIR, languages=["de"]))
)


de_en_PO = polib.POFile()
de_en_PO.metadata = {
    "Project-Id-Version": "1.0",
    "Report-Msgid-Bugs-To": "you@example.com",
    "POT-Creation-Date": "2007-10-18 14:00+0100",
    "PO-Revision-Date": "2007-10-18 14:00+0100",
    "Last-Translator": "you <you@example.com>",
    "Language-Team": "English <yourteam@example.com>",
    "MIME-Version": "1.0",
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Transfer-Encoding": "8bit",
}


for i in en_de_PO:
    # temp = i.msgid
    # i.msgid = i.msgstr
    # i.msgstr = temp
    entry = polib.POEntry(
        msgid=i.msgstr,
        msgstr=i.msgid,
        # occurrences=[("welcome.py", "12"), ("anotherfile.py", "34")],
    )
    de_en_PO.append(entry)

    # print(i)


# de_en_PO.
de_en_PO.save_as_mofile(DE_EN_MOFILE)


new_de_en_PO = polib.mofile(DE_EN_MOFILE)


# for i in new_de_en_PO:
#     print(i)
