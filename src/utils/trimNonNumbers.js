/*
 * Copyright (c) 2020.
 * Safaricom PLC
 * Systems, URLs, Databases and content in this document maybe proprietary to Safaricom PLC. Use or reproduction may require written permission from Safaricom PLC
 *
 * @Author: Fredrick Mbugua/FMMBUGUA
 */

const trimNonNumbers = (text) => {
  return text.toString().replace(/\D/g, '');
};

export default trimNonNumbers;