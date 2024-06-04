export const createUser = {
  email: {
    required: {
      value: true,
      message: "Please Enter Valid Email",
    },
    pattern: {
      value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Email Formate is required"
    }
  },
  userName: {
    required: {
      value: true,
      message: "Please enter password"
    }
  },

  password: {
    required: {
      value: true,
      message: "Please enter password"
    }
  },
  cnfpassword: {
    required: {
      value: true,
      message: "Please enter password"
    }
  }
}

export const login = {
  email: {
    required: {
      value: true,
      message: "Please Enter Valid Email",
    },
    pattern: {
      value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/,
      message: "Email Formate is required"
    }
  },
  password: {
    required: {
      value: true,
      message: "Please enter password"
    }
  }
}
export const requestDemo = {
  email: {
    required: {
      value: true,
      message: "Please Enter Valid Email",
    },
    pattern: {
      value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Email Formate is required"
    }
  },
  customerName: {
    required: {
      value: true,
      message: "Please enter password"
    }
  },
  companyName: {
    required: {
      value: true,
      message: "Please enter password"
    }
  },
  mobile: {
    required: {
      value: true,
      message: "Please enter password"
    },
  }
}

export const forgotPassword = {
  email: {
    required: {
      value: true,
      message: "Please enter password"
    },
    pattern: {
      value: /^(?!.*[.]{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Email Formate is required"
    }
  },
}

export const resetPassword = {
  password: {
    required: {
      value: true,
      message: "Please enter password"
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: "Please enter password"
    },
  }
}
export const product = {
  productName: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  description: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  }
}
export const uopdateProfile = {
  firstName: {
    required: {
      value: true,
      message: "Enter first name"
    }
  },
  lastName: {
    required: {
      value: true,
      message: "Enter first name"
    }
  }
}

export const updatePassword = {
  currentPassword: {
    required: {
      value: true,
      message: "Current password"
    },
  },
  newPassword: {
    required: {
      value: true,
      message: "Current password"
    },
    minlength: {
      value: 6,
      message: "Enter"
    }
  },
  confirmPassword: {
    required: {
      value: true,
      message: "Current password"
    }
  }

}

export const requestNote = {
  note: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
}

export const Module = {
  moduleName: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  moduleDesc: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  }

}

export const Organization = {
  organizationName: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  userLimit: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  validUpTo: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  customerRequestId: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  }
}
export const Bundle = {
  bundleName: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  productId: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  price: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },

}

export const users = {
  firstName: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  lastName: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  email: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
  phone: {
    required: {
      value: true,
      message: "Enter Product name"
    }
  },
}
