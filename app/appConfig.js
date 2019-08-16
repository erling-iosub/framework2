// used to catch angular exceptions

myframeWork.config(($provide) => {
  $provide.decorator(`$exceptionHandler`, [`$delegate`,
    ($delegate) => {
      return (exception, cause) => {
        $delegate(exception, cause);
        console.log(exception.message)
      }
    }])
})