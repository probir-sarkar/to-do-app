const authErrors = {
  "auth/claims-too-large":
    "The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.",
  "auth/email-already-exists":
    "The provided email is already in use by an existing user. Each user must have a unique email.",
  "auth/id-token-expired":
    "The Firebase ID token has expired. Get a fresh token from your client app and try again (auth/id-token-expired).",
  "auth/id-token-revoked":
    "The Firebase ID token has been revoked. Get a fresh token from your client app and try again (auth/id-token-revoked).",
  "auth/insufficient-permission":
    "The caller does not have permission to execute the specified operation. This error can be thrown when the caller does not have permission to access the project using the FirebaseProjectManager APIs or when the types of project resources being accessed (such as Cloud Firestore) are not within the caller's FirebaseProjectManager. ListAuthorizedProjects API. For example, if a client tries to call Cloud Firestore APIs for a project that is not part of their FirebaseProjectManager project list, they will get an INSUFFICIENT_PERMISSION error. For instructions on how to check for and change this error, see [Insufficient Permission Error](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects/listAuthorizedProjects#insufficient_permission_error).",
  "auth/internal-error": "An internal error has occurred. Please retry your request.",
  "auth/invalid-argument": "An invalid argument was provided to a Cloud Firestore method.",
  "auth/invalid-claims":
    "The provided custom claims payload is invalid. It must a non-null object.",
  "auth/invalid-continue-uri": "The continue URL provided in the request is invalid.",
  "auth/invalid-creation-time":
    "The provided creation time is invalid. The creation time must be a valid UTC date string.",
  "auth/invalid-credential": "The supplied auth credential is malformed or has expired.",
  "auth/invalid-disabled-field":
    "The provided value for the disabled user property is invalid. It must be a boolean.",
  "auth/invalid-display-name":
    "The provided value for the displayName user property is invalid. It must be a non-empty string.",
  "auth/invalid-dynamic-link-domain":
    "The provided dynamic link domain is not configured or authorized for the current project.",
  "auth/invalid-email": "The email address is badly formatted.",
  "auth/invalid-email-verified":
    "The provided value for the emailVerified user property is invalid. It must be a boolean.",
  "auth/invalid-hash-algorithm": "The hash algorithm must be a valid string.",
  "auth/invalid-hash-block-size": "The hash block size must be a valid number.",
  "auth/invalid-hash-derived-key-length": "The hash derived key length must be a valid number.",
  "auth/invalid-hash-key": "The hash key must be a valid byte buffer.",
  "auth/invalid-hash-memory-cost": "The hash memory cost must be a valid number.",
  "auth/invalid-hash-parallelization": "The hash parallelization must be a valid number.",
};
