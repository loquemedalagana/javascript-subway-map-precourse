import DeleteStationFromLineValidation from "../../controllers/section/deleteStationFromLineValidation.js";
import deleteStationFromLine from "../../_store/Section/deleteStationFromLine.js";
import { DELETE_MESSAGE_FROM_LINE } from "../../common/alertMessages.js";

export default (deletedStationName, updatedLineName) => {
  if (!confirm(DELETE_MESSAGE_FROM_LINE)) return null;
  const deleteValidationCheck = new DeleteStationFromLineValidation(
    deletedStationName,
    updatedLineName,
  );
  const { ok, message, updatedLineList } = deleteValidationCheck.getDeleteValidationResult();
  return new Promise((resolve, reject) => {
    if (!ok) {
      reject(alert(message));
    }
    resolve(deleteStationFromLine(deletedStationName, updatedLineList)); // 나중에 else 추가
  });
};
