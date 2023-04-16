export const debounce = (callBack, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callBack.apply(this, args);
    }, timeout);
  };
};

export const throttle = (callBack, delay = 500) => {
  let wait = false;
  return (...args) => {
    if (wait) {
      return;
    }
    callBack(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};

export const getFileFromBase64 = async (base64, name = "palceholder-name") => {
  const someMagic = await fetch(base64);
  const blob = await someMagic.blob();
  const file = new File([blob], name, { type: "image/png" });
  file.objectURL = URL.createObjectURL(file);
  return file;
};
