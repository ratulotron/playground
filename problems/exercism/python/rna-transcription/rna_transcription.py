def ommition(string, ommit):
    if len(ommit)==0:
        return string
    new_string = string.replace(ommit.pop(), '')
    return ommition(new_string, ommit)

def to_rna(dna_strand):
    trans = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    }

    try:
        return ''.join(map((lambda x: trans[x]), dna_strand))
    except:
        raise ValueError("habijabi")