import hashlib


def hash_md5(text):
    """
    MD5加密
    :param text:
    :return:
    """
    md5 = hashlib.md5()
    md5.update(text.encode('utf-8'))
    return md5.hexdigest()
