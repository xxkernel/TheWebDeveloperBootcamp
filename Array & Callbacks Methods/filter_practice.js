function validUserNames(usernames) {
    const res = usernames.filter(name => {
        return name.length<10;
    })
    return res;
  }