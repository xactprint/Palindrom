Fonction isPalindrome(word):

    Si le mot est vide OU contient un seul caractère:
        Retourner true

    Si le premier caractère est différent du dernier:
        Retourner false

    Sinon:
        Retourner isPalindrome(
            le mot sans son premier et son dernier caractère
        )
