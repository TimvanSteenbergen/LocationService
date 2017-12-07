package system;

import aQute.bnd.annotation.component.Component;
import aQute.bnd.annotation.component.Reference;

import com.mendix.core.actionmanagement.IActionRegistrator;

@Component(immediate = true)
public class UserActionsRegistrar
{
  @Reference
  public void registerActions(IActionRegistrator registrator)
  {
    registrator.bundleComponentLoaded();
    registrator.registerUserAction(flatfileinterface.actions.ExecuteInterface_Delimited_4_1_00.class);
    registrator.registerUserAction(flatfileinterface.actions.ExecuteInterface_FixedLength_4_1_00.class);
    registrator.registerUserAction(flatfileinterface.actions.JA_StringToFileEncoding.class);
    registrator.registerUserAction(flatfileinterface.actions.JA_StringToFilePrimitiveType.class);
    registrator.registerUserAction(flatfileinterface.actions.JA_StringToFileType.class);
    registrator.registerUserAction(flatfileinterface.actions.JA_StringToIntervalType.class);
    registrator.registerUserAction(flatfileinterface.actions.JA_StringToLogLevel.class);
    registrator.registerUserAction(flatfileinterface.actions.JA_StringToTextQualifier.class);
    registrator.registerUserAction(listutils.actions.AggregateList.class);
    registrator.registerUserAction(listutils.actions.FilterList.class);
    registrator.registerUserAction(listutils.actions.SerializeList.class);
    registrator.registerUserAction(listutils.actions.TransformXSLT.class);
    registrator.registerUserAction(mxmodelreflection.actions.ReplaceToken.class);
    registrator.registerUserAction(mxmodelreflection.actions.SyncObjects.class);
    registrator.registerUserAction(mxmodelreflection.actions.TestThePattern.class);
    registrator.registerUserAction(mxmodelreflection.actions.ValidateTokensInMessage.class);
    registrator.registerUserAction(objecthandling.actions.clone.class);
    registrator.registerUserAction(objecthandling.actions.commitInSeparateDatabaseTransaction.class);
    registrator.registerUserAction(objecthandling.actions.copyAttributes.class);
    registrator.registerUserAction(objecthandling.actions.createObjectListFromObject.class);
    registrator.registerUserAction(objecthandling.actions.deepClone.class);
    registrator.registerUserAction(objecthandling.actions.deleteAll.class);
    registrator.registerUserAction(objecthandling.actions.deleteInSeparateTransaction.class);
    registrator.registerUserAction(objecthandling.actions.deleteWithoutEvents.class);
    registrator.registerUserAction(objecthandling.actions.EndTransaction.class);
    registrator.registerUserAction(objecthandling.actions.getCreatedByUser.class);
    registrator.registerUserAction(objecthandling.actions.getGUID.class);
    registrator.registerUserAction(objecthandling.actions.getLastChangedByUser.class);
    registrator.registerUserAction(objecthandling.actions.getOriginalValueAsString.class);
    registrator.registerUserAction(objecthandling.actions.getTypeAsString.class);
    registrator.registerUserAction(objecthandling.actions.memberHasChanged.class);
    registrator.registerUserAction(objecthandling.actions.objectHasChanged.class);
    registrator.registerUserAction(objecthandling.actions.refreshClassByObject.class);
    registrator.registerUserAction(objecthandling.actions.StartTransaction.class);
    registrator.registerUserAction(system.actions.VerifyPassword.class);
    registrator.registerUserAction(unittesting.actions.FindAllUnitTests.class);
    registrator.registerUserAction(unittesting.actions.ReportStepJava.class);
    registrator.registerUserAction(unittesting.actions.RunAllUnitTestsWrapper.class);
    registrator.registerUserAction(unittesting.actions.RunUnitTest.class);
    registrator.registerUserAction(unittesting.actions.StartRemoteApiServlet.class);
    registrator.registerUserAction(unittesting.actions.StartRunAllSuites.class);
    registrator.registerUserAction(unittesting.actions.ThrowAssertionFailed.class);
  }
}
