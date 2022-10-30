
  export const randomChoose = (list) => {
    const shuffled = list.slice(0);
    let i = list.length;
    const min = i - 1;
    let temp, index;  //只是声明变量的方式, 也可以分开写
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
        temp = shuffled[index];  //即值交换
        shuffled[index] = shuffled[i]; 
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }