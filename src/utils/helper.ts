export class Helper {
  errorHandler(error) {
    uni.showToast({ title: error.message, icon: "none" });
  }
}
