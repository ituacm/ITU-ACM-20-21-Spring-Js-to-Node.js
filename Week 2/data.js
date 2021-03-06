const issueData = [
  {
    key: "HIVE-9995",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
      name: "dkuzmenko",
      key: "dkuzmenko",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Denys Kuzmenko",
      active: true,
      timeZone: "Etc/UTC",
    },
    status: "Resolved",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=ekoifman",
      name: "ekoifman",
      key: "ekoifman",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Eugene Koifman",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=ekoifman",
      name: "ekoifman",
      key: "ekoifman",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Eugene Koifman",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2019-04-09T09:00:45.268Z",
    workRatio: -1,
    created: "2015-03-17T20:16:27.205Z",
    updated: "2020-01-08T10:40:42.368Z",
    description:
      "Consider TestWorker.minorWithOpenInMiddle()\n\nsince there is an open txnId=23, this doesn't have any meaningful minor compaction work to do.  The system still tries to compact a single delta file for 21-22 id range, and effectively copies the file onto itself.\n\nThis is 1. inefficient and 2. can potentially affect a reader.\n\n(from a real cluster)\nSuppose we start with \n{noformat}\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:03 /user/hive/warehouse/t/base_0000016\n-rw-r--r--   1 ekoifman staff        602 2016-06-09 16:03 /user/hive/warehouse/t/base_0000016/bucket_00000\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:07 /user/hive/warehouse/t/base_0000017\n-rw-r--r--   1 ekoifman staff        588 2016-06-09 16:07 /user/hive/warehouse/t/base_0000017/bucket_00000\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:07 /user/hive/warehouse/t/delta_0000017_0000017_0000\n-rw-r--r--   1 ekoifman staff        514 2016-06-09 16:06 /user/hive/warehouse/t/delta_0000017_0000017_0000/bucket_00000\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:07 /user/hive/warehouse/t/delta_0000018_0000018_0000\n-rw-r--r--   1 ekoifman staff        612 2016-06-09 16:07 /user/hive/warehouse/t/delta_0000018_0000018_0000/bucket_00000\n{noformat}\nthen do _alter table T compact 'minor';_\n\nthen we end up with \n{noformat}\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:07 /user/hive/warehouse/t/base_0000017\n-rw-r--r--   1 ekoifman staff        588 2016-06-09 16:07 /user/hive/warehouse/t/base_0000017/bucket_00000\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:11 /user/hive/warehouse/t/delta_0000018_0000018\n-rw-r--r--   1 ekoifman staff        500 2016-06-09 16:11 /user/hive/warehouse/t/delta_0000018_0000018/bucket_00000\ndrwxr-xr-x   - ekoifman staff          0 2016-06-09 16:07 /user/hive/warehouse/t/delta_0000018_0000018_0000\n-rw-r--r--   1 ekoifman staff        612 2016-06-09 16:07 /user/hive/warehouse/t/delta_0000018_0000018_0000/bucket_00000\n{noformat}\n\nSo compaction created a new dir _/user/hive/warehouse/t/delta_0000018_0000018_",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "ACID compaction tries to compact a single file",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16174097",
        id: "16174097",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ekoifman",
          name: "ekoifman",
          key: "ekoifman",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Eugene Koifman",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "also, if the user is explicitly requesting Minor compaction but there are Original files and no base, should we automatically run Major or reject the request\n\nalso, \nmake sure that Initiator request Major if there are Originals but no base\n\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ekoifman",
          name: "ekoifman",
          key: "ekoifman",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Eugene Koifman",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2017-09-21T01:29:47.232+0000",
        updated: "2017-09-21T01:29:47.232+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16764036",
        id: "16764036",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (x) *{color:red}-1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  8m 36s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m  6s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 40s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  3m 59s{color} | {color:blue} ql in master has 2298 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  0m 58s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 27s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m  8s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m  8s{color} | {color:green} the patch passed {color} |\r\n| {color:red}-1{color} | {color:red} checkstyle {color} | {color:red}  0m 40s{color} | {color:red} ql: The patch generated 3 new + 158 unchanged - 7 fixed = 161 total (was 165) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 12s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  0m 59s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 13s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 24m 27s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16004/dev-support/hive-personality.sh |\r\n| git revision | master / 4ddc9de |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| checkstyle | http://104.198.109.242/logs//PreCommit-HIVE-Build-16004/yetus/diff-checkstyle-ql.txt |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16004/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-02-09T02:23:54.469+0000",
        updated: "2019-02-09T02:23:54.469+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16764052",
        id: "16764052",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12958109/HIVE-9995.01.patch\n\n{color:red}ERROR:{color} -1 due to no test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 4 failed/errored test(s), 15784 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.ql.TestTxnCommands2.testEmptyInTblproperties (batchId=309)\norg.apache.hadoop.hive.ql.TestTxnCommands2.testNonAcidToAcidConversion3 (batchId=309)\norg.apache.hadoop.hive.ql.TestTxnCommands2WithSplitUpdateAndVectorization.testEmptyInTblproperties (batchId=323)\norg.apache.hadoop.hive.ql.TestTxnCommands2WithSplitUpdateAndVectorization.testNonAcidToAcidConversion3 (batchId=323)\n{noformat}\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16004/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16004/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16004/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 4 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12958109 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-02-09T03:10:04.249+0000",
        updated: "2019-02-09T03:10:04.249+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16797852",
        id: "16797852",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (x) *{color:red}-1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  8m 30s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 16s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 49s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m  8s{color} | {color:blue} ql in master has 2255 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  1s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 34s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 10s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 10s{color} | {color:green} the patch passed {color} |\r\n| {color:red}-1{color} | {color:red} checkstyle {color} | {color:red}  0m 47s{color} | {color:red} ql: The patch generated 3 new + 680 unchanged - 7 fixed = 683 total (was 687) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 19s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  3s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 13s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 25m 26s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16604/dev-support/hive-personality.sh |\r\n| git revision | master / 25b14be |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| checkstyle | http://104.198.109.242/logs//PreCommit-HIVE-Build-16604/yetus/diff-checkstyle-ql.txt |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16604/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-21T05:51:42.507+0000",
        updated: "2019-03-21T05:51:42.507+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16797872",
        id: "16797872",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963145/HIVE-9995.02.patch\n\n{color:green}SUCCESS:{color} +1 due to 1 test(s) being added or modified.\n\n{color:green}SUCCESS:{color} +1 due to 15833 tests passed\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16604/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16604/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16604/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963145 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-21T06:37:31.538+0000",
        updated: "2019-03-21T06:37:31.538+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16797975",
        id: "16797975",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "[~vgumashta] could you please review. Thank you!",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2019-03-21T10:30:02.716+0000",
        updated: "2019-03-21T10:30:11.921+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16798349",
        id: "16798349",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (/) *{color:green}+1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  8m 35s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 20s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 47s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m 17s{color} | {color:blue} ql in master has 2255 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  4s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 39s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 15s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 15s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 47s{color} | {color:green} ql: The patch generated 0 new + 702 unchanged - 10 fixed = 702 total (was 712) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  1s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 35s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  4s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 15s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 26m 14s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16615/dev-support/hive-personality.sh |\r\n| git revision | master / 38682a4 |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16615/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-21T19:03:55.956+0000",
        updated: "2019-03-21T19:03:55.956+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16798372",
        id: "16798372",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963282/HIVE-9995.04.patch\n\n{color:green}SUCCESS:{color} +1 due to 2 test(s) being added or modified.\n\n{color:green}SUCCESS:{color} +1 due to 15833 tests passed\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16615/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16615/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16615/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963282 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-21T19:48:46.476+0000",
        updated: "2019-03-21T19:48:46.476+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16798554",
        id: "16798554",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963282/HIVE-9995.04.patch\n\n{color:red}ERROR:{color} -1 due to build exiting with an error\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16619/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16619/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16619/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nTests exited with: Exception: Patch URL https://issues.apache.org/jira/secure/attachment/12963282/HIVE-9995.04.patch was found in seen patch url's cache and a test was probably run already on it. Aborting...\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963282 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-21T23:46:18.708+0000",
        updated: "2019-03-21T23:46:18.708+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16798555",
        id: "16798555",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963282/HIVE-9995.04.patch\n\n{color:red}ERROR:{color} -1 due to build exiting with an error\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16620/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16620/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16620/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nTests exited with: Exception: Patch URL https://issues.apache.org/jira/secure/attachment/12963282/HIVE-9995.04.patch was found in seen patch url's cache and a test was probably run already on it. Aborting...\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963282 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-21T23:46:59.426+0000",
        updated: "2019-03-21T23:46:59.426+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799207",
        id: "16799207",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (x) *{color:red}-1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  8m 32s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 12s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 45s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m  8s{color} | {color:blue} ql in master has 2255 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  5s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 37s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 10s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 10s{color} | {color:green} the patch passed {color} |\r\n| {color:red}-1{color} | {color:red} checkstyle {color} | {color:red}  0m 47s{color} | {color:red} ql: The patch generated 1 new + 702 unchanged - 10 fixed = 703 total (was 712) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 24s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  4s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 14s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 25m 33s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16636/dev-support/hive-personality.sh |\r\n| git revision | master / 2fa22bf |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| checkstyle | http://104.198.109.242/logs//PreCommit-HIVE-Build-16636/yetus/diff-checkstyle-ql.txt |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16636/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-22T17:28:07.551+0000",
        updated: "2019-03-22T17:28:07.551+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799229",
        id: "16799229",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963410/HIVE-9995.05.patch\n\n{color:green}SUCCESS:{color} +1 due to 2 test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 10 failed/errored test(s), 15836 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestMiniSparkOnYarnCliDriver.testCliDriver[spark_use_ts_stats_for_mapjoin] (batchId=191)\norg.apache.hadoop.hive.metastore.TestObjectStore.testDirectSQLDropParitionsCleanup (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testDirectSQLDropPartitionsCacheCrossSession (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testDirectSqlErrorMetrics (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testEmptyTrustStoreProps (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testMaxEventResponse (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testPartitionOps (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testQueryCloseOnError (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testRoleOps (batchId=230)\norg.apache.hadoop.hive.metastore.TestObjectStore.testUseSSLProperty (batchId=230)\n{noformat}\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16636/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16636/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16636/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 10 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963410 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-22T18:07:49.709+0000",
        updated: "2019-03-22T18:07:49.709+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799486",
        id: "16799486",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963436/HIVE-9995.06.patch\n\n{color:red}ERROR:{color} -1 due to build exiting with an error\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16643/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16643/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16643/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nTests exited with: NonZeroExitCodeException\nCommand 'bash /data/hiveptest/working/scratch/source-prep.sh' failed with exit status 1 and output '+ date '+%Y-%m-%d %T.%3N'\n2019-03-23 01:34:37.391\n+ [[ -n /usr/lib/jvm/java-8-openjdk-amd64 ]]\n+ export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64\n+ JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64\n+ export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games\n+ PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games\n+ export 'ANT_OPTS=-Xmx1g -XX:MaxPermSize=256m '\n+ ANT_OPTS='-Xmx1g -XX:MaxPermSize=256m '\n+ export 'MAVEN_OPTS=-Xmx1g '\n+ MAVEN_OPTS='-Xmx1g '\n+ cd /data/hiveptest/working/\n+ tee /data/hiveptest/logs/PreCommit-HIVE-Build-16643/source-prep.txt\n+ [[ false == \\t\\r\\u\\e ]]\n+ mkdir -p maven ivy\n+ [[ git = \\s\\v\\n ]]\n+ [[ git = \\g\\i\\t ]]\n+ [[ -z master ]]\n+ [[ -d apache-github-source-source ]]\n+ [[ ! -d apache-github-source-source/.git ]]\n+ [[ ! -d apache-github-source-source ]]\n+ date '+%Y-%m-%d %T.%3N'\n2019-03-23 01:34:37.393\n+ cd apache-github-source-source\n+ git fetch origin\n+ git reset --hard HEAD\nHEAD is now at 2fa22bf HIVE-21473: Bumping jackson version to 2.9.8 (Peter Vary, reviewed by Marta Kuczora)\n+ git clean -f -d\nRemoving ${project.basedir}/\nRemoving itests/${project.basedir}/\nRemoving standalone-metastore/metastore-server/src/gen/\n+ git checkout master\nAlready on 'master'\nYour branch is up-to-date with 'origin/master'.\n+ git reset --hard origin/master\nHEAD is now at 2fa22bf HIVE-21473: Bumping jackson version to 2.9.8 (Peter Vary, reviewed by Marta Kuczora)\n+ git merge --ff-only origin/master\nAlready up-to-date.\n+ date '+%Y-%m-%d %T.%3N'\n2019-03-23 01:34:39.092\n+ rm -rf ../yetus_PreCommit-HIVE-Build-16643\n+ mkdir ../yetus_PreCommit-HIVE-Build-16643\n+ git gc\n+ cp -R . ../yetus_PreCommit-HIVE-Build-16643\n+ mkdir /data/hiveptest/logs/PreCommit-HIVE-Build-16643/yetus\n+ patchCommandPath=/data/hiveptest/working/scratch/smart-apply-patch.sh\n+ patchFilePath=/data/hiveptest/working/scratch/build.patch\n+ [[ -f /data/hiveptest/working/scratch/build.patch ]]\n+ chmod +x /data/hiveptest/working/scratch/smart-apply-patch.sh\n+ /data/hiveptest/working/scratch/smart-apply-patch.sh /data/hiveptest/working/scratch/build.patch\nfatal: corrupt patch at line 113\nfatal: corrupt patch at line 113\nfatal: corrupt patch at line 113\nThe patch does not appear to apply with p0, p1, or p2\n+ result=1\n+ '[' 1 -ne 0 ']'\n+ rm -rf yetus_PreCommit-HIVE-Build-16643\n+ exit 1\n'\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963436 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-23T01:35:20.446+0000",
        updated: "2019-03-23T01:35:20.446+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799677",
        id: "16799677",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (x) *{color:red}-1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  8m 46s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 13s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 46s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m 22s{color} | {color:blue} ql in master has 2255 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  5s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 39s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 14s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 14s{color} | {color:green} the patch passed {color} |\r\n| {color:red}-1{color} | {color:red} checkstyle {color} | {color:red}  0m 45s{color} | {color:red} ql: The patch generated 2 new + 702 unchanged - 10 fixed = 704 total (was 712) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 24s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  3s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 14s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 26m  8s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16653/dev-support/hive-personality.sh |\r\n| git revision | master / 2fa22bf |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| checkstyle | http://104.198.109.242/logs//PreCommit-HIVE-Build-16653/yetus/diff-checkstyle-ql.txt |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16653/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-23T15:26:56.501+0000",
        updated: "2019-03-23T15:26:56.501+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799688",
        id: "16799688",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963503/HIVE-9995.07.patch\n\n{color:green}SUCCESS:{color} +1 due to 2 test(s) being added or modified.\n\n{color:green}SUCCESS:{color} +1 due to 15836 tests passed\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16653/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16653/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16653/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963503 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-23T16:07:32.113+0000",
        updated: "2019-03-23T16:07:32.113+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799689",
        id: "16799689",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963503/HIVE-9995.07.patch\n\n{color:red}ERROR:{color} -1 due to build exiting with an error\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16654/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16654/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16654/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nTests exited with: Exception: Patch URL https://issues.apache.org/jira/secure/attachment/12963503/HIVE-9995.07.patch was found in seen patch url's cache and a test was probably run already on it. Aborting...\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963503 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-23T16:08:21.342+0000",
        updated: "2019-03-23T16:08:21.342+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799786",
        id: "16799786",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (/) *{color:green}+1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  8m 36s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 11s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 45s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m 13s{color} | {color:blue} ql in master has 2255 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  4s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 32s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 15s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 15s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 47s{color} | {color:green} ql: The patch generated 0 new + 702 unchanged - 10 fixed = 702 total (was 712) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 23s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  3s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 14s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 25m 34s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16656/dev-support/hive-personality.sh |\r\n| git revision | master / 2fa22bf |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16656/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-23T20:31:05.445+0000",
        updated: "2019-03-23T20:31:05.445+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16799801",
        id: "16799801",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12963514/HIVE-9995.08.patch\n\n{color:green}SUCCESS:{color} +1 due to 2 test(s) being added or modified.\n\n{color:green}SUCCESS:{color} +1 due to 15836 tests passed\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16656/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16656/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16656/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12963514 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-03-23T21:13:54.733+0000",
        updated: "2019-03-23T21:13:54.733+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16802743",
        id: "16802743",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "[~vgumashta] could you please review. Thank you.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2019-03-27T12:53:05.053+0000",
        updated: "2019-03-27T12:53:05.053+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16804981",
        id: "16804981",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=pvary",
          name: "pvary",
          key: "pvary",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Peter Vary",
          active: true,
          timeZone: "Europe/Budapest",
        },
        body: "LGTM +1 from my side",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=pvary",
          name: "pvary",
          key: "pvary",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Peter Vary",
          active: true,
          timeZone: "Europe/Budapest",
        },
        created: "2019-03-29T13:29:06.274+0000",
        updated: "2019-03-29T13:29:06.274+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16805024",
        id: "16805024",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "[~vgumashta],[~ashutoshc]: Does anyone have any last comments?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2019-03-29T14:27:07.326+0000",
        updated: "2019-03-29T14:27:07.326+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16806592",
        id: "16806592",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=pvary",
          name: "pvary",
          key: "pvary",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Peter Vary",
          active: true,
          timeZone: "Europe/Budapest",
        },
        body: "[~dkuzmenko]: Rebase please :(",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=pvary",
          name: "pvary",
          key: "pvary",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Peter Vary",
          active: true,
          timeZone: "Europe/Budapest",
        },
        created: "2019-04-01T10:00:45.294+0000",
        updated: "2019-04-01T10:00:45.294+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16806755",
        id: "16806755",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "rebased",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=dkuzmenko",
          name: "dkuzmenko",
          key: "dkuzmenko",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Denys Kuzmenko",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2019-04-01T13:30:44.576+0000",
        updated: "2019-04-01T13:30:44.576+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16806979",
        id: "16806979",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (/) *{color:green}+1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  9m 23s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 23s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 53s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m 39s{color} | {color:blue} ql in master has 2258 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  6s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 39s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 18s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 18s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 49s{color} | {color:green} ql: The patch generated 0 new + 823 unchanged - 11 fixed = 823 total (was 834) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 49s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  8s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 15s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 27m 51s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16797/dev-support/hive-personality.sh |\r\n| git revision | master / 82feb02 |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16797/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-04-01T16:56:19.616+0000",
        updated: "2019-04-01T16:56:19.616+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16807020",
        id: "16807020",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12964444/HIVE-9995.09.patch\n\n{color:green}SUCCESS:{color} +1 due to 2 test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 7 failed/errored test(s), 15890 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerCustomCreatedDynamicPartitions (batchId=263)\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerCustomCreatedDynamicPartitionsUnionAll (batchId=263)\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerCustomNonExistent (batchId=263)\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerHighBytesRead (batchId=263)\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerHighShuffleBytes (batchId=263)\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerSlowQueryElapsedTime (batchId=263)\norg.apache.hive.jdbc.TestTriggersTezSessionPoolManager.testTriggerSlowQueryExecutionTime (batchId=263)\n{noformat}\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16797/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16797/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16797/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 7 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12964444 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-04-01T17:38:39.231+0000",
        updated: "2019-04-01T17:38:39.231+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16807402",
        id: "16807402",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "| (/) *{color:green}+1 overall{color}* |\r\n\\\\\r\n\\\\\r\n|| Vote || Subsystem || Runtime || Comment ||\r\n|| || || || {color:brown} Prechecks {color} ||\r\n| {color:green}+1{color} | {color:green} @author {color} | {color:green}  0m  0s{color} | {color:green} The patch does not contain any @author tags. {color} |\r\n|| || || || {color:brown} master Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  9m  9s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 15s{color} | {color:green} master passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 51s{color} | {color:green} master passed {color} |\r\n| {color:blue}0{color} | {color:blue} findbugs {color} | {color:blue}  4m 28s{color} | {color:blue} ql in master has 2258 extant Findbugs warnings. {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  8s{color} | {color:green} master passed {color} |\r\n|| || || || {color:brown} Patch Compile Tests {color} ||\r\n| {color:green}+1{color} | {color:green} mvninstall {color} | {color:green}  1m 43s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} compile {color} | {color:green}  1m 16s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javac {color} | {color:green}  1m 16s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} checkstyle {color} | {color:green}  0m 48s{color} | {color:green} ql: The patch generated 0 new + 823 unchanged - 11 fixed = 823 total (was 834) {color} |\r\n| {color:green}+1{color} | {color:green} whitespace {color} | {color:green}  0m  0s{color} | {color:green} The patch has no whitespace issues. {color} |\r\n| {color:green}+1{color} | {color:green} findbugs {color} | {color:green}  4m 42s{color} | {color:green} the patch passed {color} |\r\n| {color:green}+1{color} | {color:green} javadoc {color} | {color:green}  1m  5s{color} | {color:green} the patch passed {color} |\r\n|| || || || {color:brown} Other Tests {color} ||\r\n| {color:green}+1{color} | {color:green} asflicense {color} | {color:green}  0m 14s{color} | {color:green} The patch does not generate ASF License warnings. {color} |\r\n| {color:black}{color} | {color:black} {color} | {color:black} 27m 16s{color} | {color:black} {color} |\r\n\\\\\r\n\\\\\r\n|| Subsystem || Report/Notes ||\r\n| Optional Tests |  asflicense  javac  javadoc  findbugs  checkstyle  compile  |\r\n| uname | Linux hiveptest-server-upstream 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u1 (2016-09-03) x86_64 GNU/Linux |\r\n| Build tool | maven |\r\n| Personality | /data/hiveptest/working/yetus_PreCommit-HIVE-Build-16811/dev-support/hive-personality.sh |\r\n| git revision | master / 5bf5d14 |\r\n| Default Java | 1.8.0_111 |\r\n| findbugs | v3.0.0 |\r\n| modules | C: ql U: ql |\r\n| Console output | http://104.198.109.242/logs//PreCommit-HIVE-Build-16811/yetus.txt |\r\n| Powered by | Apache Yetus    http://yetus.apache.org |\r\n\r\n\r\nThis message was automatically generated.\r\n\r\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-04-02T04:32:24.344+0000",
        updated: "2019-04-02T04:32:24.344+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16807409",
        id: "16807409",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12964487/HIVE-9995.10.patch\n\n{color:green}SUCCESS:{color} +1 due to 2 test(s) being added or modified.\n\n{color:green}SUCCESS:{color} +1 due to 15890 tests passed\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/16811/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/16811/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-16811/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.YetusPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12964487 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2019-04-02T05:10:31.598+0000",
        updated: "2019-04-02T05:10:31.598+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16807722",
        id: "16807722",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=pvary",
          name: "pvary",
          key: "pvary",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Peter Vary",
          active: true,
          timeZone: "Europe/Budapest",
        },
        body: "+1 for patch 10",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=pvary",
          name: "pvary",
          key: "pvary",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Peter Vary",
          active: true,
          timeZone: "Europe/Budapest",
        },
        created: "2019-04-02T12:42:25.038+0000",
        updated: "2019-04-02T12:42:25.038+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782676/comment/16813150",
        id: "16813150",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=szita",
          name: "szita",
          key: "szita",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "??d??m Szita",
          active: true,
          timeZone: "Europe/Budapest",
        },
        body: "Committed to master. Thanks Denys!",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=szita",
          name: "szita",
          key: "szita",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "??d??m Szita",
          active: true,
          timeZone: "Europe/Budapest",
        },
        created: "2019-04-09T09:00:32.023+0000",
        updated: "2019-04-09T09:00:32.023+0000",
      },
    ],
  },
  {
    key: "HIVE-9994",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-19T16:15:04.074Z",
    workRatio: -1,
    created: "2015-03-17T18:51:00.189Z",
    updated: "2015-05-18T19:54:39.935Z",
    description:
      "Some applications are using getQueryString() method from the QueryPlan class to get the query that is being executed by Hive. The query string returned is not redacted, and it is returning sensitive information that is logged in Navigator.\n\nWe need to return data redacted from the QueryPlan to avoid other applications to log sensitive data.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Hive query plan returns sensitive data to external applications",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14367683",
        id: "14367683",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Patch looks good. One question: do we need to check null for the input in redactLogString() as it's a public method?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-18T19:06:17.310+0000",
        updated: "2015-03-18T19:06:17.310+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14367747",
        id: "14367747",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "Thanks [~xuefuz]\nYes, I should have checked for null. I'll make the changes.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-18T19:40:00.094+0000",
        updated: "2015-03-18T19:40:00.094+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14367750",
        id: "14367750",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "This patch checks that the input variables passed to redactLogString() are not null.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-18T19:40:47.873+0000",
        updated: "2015-03-18T19:40:47.873+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14367771",
        id: "14367771",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-18T19:52:33.752+0000",
        updated: "2015-03-18T19:52:33.752+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14367882",
        id: "14367882",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705411/HIVE-9994.1.patch\n\n{color:green}SUCCESS:{color} +1 7771 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3071/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3071/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3071/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705411 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-18T20:56:18.492+0000",
        updated: "2015-03-18T20:56:18.492+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14368042",
        id: "14368042",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705418/HIVE-9994.3.patch\n\n{color:green}SUCCESS:{color} +1 7772 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3072/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3072/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3072/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705418 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-18T22:21:33.675+0000",
        updated: "2015-03-18T22:21:33.675+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14369625",
        id: "14369625",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks, Sergio.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-19T16:15:04.154+0000",
        updated: "2015-03-19T16:15:04.154+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782654/comment/14548986",
        id: "14548986",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:54:39.929+0000",
        updated: "2015-05-18T19:54:39.929+0000",
      },
    ],
  },
  {
    key: "HIVE-9991",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-18T13:36:20.950Z",
    workRatio: -1,
    created: "2015-03-17T15:58:07.022Z",
    updated: "2015-05-18T19:51:49.772Z",
    description:
      "I cannot do any select query on external tables that are not part of HDFS. For example S3.\n\n{code}\nSelect * from my_table limit 10;\n\nFAILED: SemanticException Unable to determine if s3n://my-bucket/is encrypted: java.lang.IllegalArgumentException: Wrong FS: s3n://my-bucket/, expected: hdfs://0.0.0.0:8020\n{code}\n\nThis error is due to a internal function that checks if a table is encrypted or not. This is only supported on HDFS files, but the check is happening on any external table as well causing the above error.\n\nTo fix this, we should check for encrypted tables only for HDFS tables. And skip the check for any other file schema.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary:
      "Cannot do a SELECT on external tables that are on S3 due to Encryption error",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14365606",
        id: "14365606",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1 pending on test",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T17:34:44.213+0000",
        updated: "2015-03-17T17:34:44.213+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14365721",
        id: "14365721",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "New patch with just a small changes:\n- Change equals() to equalsIgnoreCase()",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T18:28:12.913+0000",
        updated: "2015-03-17T18:28:12.913+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14365779",
        id: "14365779",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705104/HIVE-9991.1.patch\n\n{color:red}ERROR:{color} -1 due to 2 failed/errored test(s), 7770 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_encryption_unencrypted_nonhdfs_external_tables\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_fs_default_name2\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3058/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3058/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3058/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 2 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705104 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T18:54:02.842+0000",
        updated: "2015-03-17T18:54:02.842+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14365853",
        id: "14365853",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "Fixed patch to include the test into TestEncryptedHdfsCliDriver tests. \n\nIt also uses pfile:/// as a location instead of file:/// in order to avoid change ownership errors.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T19:25:37.124+0000",
        updated: "2015-03-17T19:25:37.124+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14366145",
        id: "14366145",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705164/HIVE-9991.3.patch\n\n{color:red}ERROR:{color} -1 due to 1 failed/errored test(s), 7770 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_fs_default_name2\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3061/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3061/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3061/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 1 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705164 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T21:43:13.334+0000",
        updated: "2015-03-17T21:43:13.334+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14366213",
        id: "14366213",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "[~spena], it seems the above failed test has a result diff. You might need to regenerate the test output.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T22:31:49.827+0000",
        updated: "2015-03-17T22:31:49.827+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14366238",
        id: "14366238",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body: "Here's the new patch with the test output updated.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T22:50:18.679+0000",
        updated: "2015-03-17T22:50:18.679+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14366556",
        id: "14366556",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705207/HIVE-9991.4.patch\n\n{color:green}SUCCESS:{color} +1 7771 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3065/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3065/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3065/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705207 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-18T03:09:06.494+0000",
        updated: "2015-03-18T03:09:06.494+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14367129",
        id: "14367129",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks, Sergio.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-18T13:36:21.000+0000",
        updated: "2015-03-18T13:36:21.000+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782599/comment/14548812",
        id: "14548812",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:51:49.767+0000",
        updated: "2015-05-18T19:51:49.767+0000",
      },
    ],
  },
  {
    key: "HIVE-9984",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: ["TODOC1.2"],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
      name: "gopalv",
      key: "gopalv",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Gopal Vijayaraghavan",
      active: true,
      timeZone: "Asia/Kolkata",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-18T23:52:00.504Z",
    workRatio: -1,
    created: "2015-03-16T23:00:29.342Z",
    updated: "2015-05-18T19:51:56.505Z",
    description:
      "Found by [~mmokhtar]. Causes major issues in large plans (50+ joins). Simple fix would be to memoize the recursion. There should also be a flag to switch this opt off.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "JoinReorder's getOutputSize is exponential",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14364176",
        id: "14364176",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "[~gopalv] take a look?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T23:15:43.137+0000",
        updated: "2015-03-16T23:15:43.137+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14364271",
        id: "14364271",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
          name: "gopalv",
          key: "gopalv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Gopal Vijayaraghavan",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body:
          "I don't think the HashMap is a good idea, IdentityHashMap is safer.\n\nMade the memoization more obvious in the attached patch.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
          name: "gopalv",
          key: "gopalv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Gopal Vijayaraghavan",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2015-03-17T00:18:09.772+0000",
        updated: "2015-03-17T00:18:09.772+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14364497",
        id: "14364497",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1 your patch is better.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T03:41:10.554+0000",
        updated: "2015-03-17T03:41:10.554+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14364731",
        id: "14364731",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704937/HIVE-9984.2.patch\n\n{color:green}SUCCESS:{color} +1 7769 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3050/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3050/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3050/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704937 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T07:50:42.595+0000",
        updated: "2015-03-17T07:50:42.595+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14368168",
        id: "14368168",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks [~gopalv]!",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-18T23:52:00.539+0000",
        updated: "2015-03-18T23:52:00.539+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14368535",
        id: "14368535",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          "Doc note:  This adds *hive.reorder.nway.joins* to HiveConf.java, so it needs to be documented for 1.2.0 in the wiki.\n\n* [Configuration Properties -- Query and DDL Execution | https://cwiki.apache.org/confluence/display/Hive/Configuration+Properties#ConfigurationProperties-QueryandDDLExecution]",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-19T05:23:56.928+0000",
        updated: "2015-03-19T05:23:56.928+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14368941",
        id: "14368941",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=damien.carol",
          name: "damien.carol",
          key: "damien.carol",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10448",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10448",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10448",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10448",
          },
          displayName: "Damien Carol",
          active: true,
          timeZone: "Europe/Paris",
        },
        body:
          "Do you want to wait the release of 1.2.0 to update the wiki or we can do it now?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=damien.carol",
          name: "damien.carol",
          key: "damien.carol",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10448",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10448",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10448",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10448",
          },
          displayName: "Damien Carol",
          active: true,
          timeZone: "Europe/Paris",
        },
        created: "2015-03-19T11:38:14.263+0000",
        updated: "2015-03-19T11:38:14.263+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14368942",
        id: "14368942",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=damien.carol",
          name: "damien.carol",
          key: "damien.carol",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10448",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10448",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10448",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10448",
          },
          displayName: "Damien Carol",
          active: true,
          timeZone: "Europe/Paris",
        },
        body:
          "Do you want to wait the release of 1.2.0 to update the wiki or we can do it now?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=damien.carol",
          name: "damien.carol",
          key: "damien.carol",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10448",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10448",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10448",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10448",
          },
          displayName: "Damien Carol",
          active: true,
          timeZone: "Europe/Paris",
        },
        created: "2015-03-19T11:38:15.359+0000",
        updated: "2015-03-19T11:38:15.359+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14369882",
        id: "14369882",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftylev",
          name: "leftylev",
          key: "leftylev",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10453",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10453",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10453",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10453",
          },
          displayName: "leftylev",
          active: false,
          timeZone: "Etc/UTC",
        },
        body:
          "Now is fine, because the wiki gives the release number for each configuration parameter.  Thanks [~damien.carol]!",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftylev",
          name: "leftylev",
          key: "leftylev",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10453",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10453",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10453",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10453",
          },
          displayName: "leftylev",
          active: false,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-19T18:45:54.417+0000",
        updated: "2015-03-19T18:45:54.417+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782399/comment/14548819",
        id: "14548819",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:51:56.500+0000",
        updated: "2015-05-18T19:51:56.500+0000",
      },
    ],
  },
  {
    key: "HIVE-9977",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
      name: "gates",
      key: "alangates",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Alan Gates",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
      name: "gates",
      key: "alangates",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Alan Gates",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
      name: "gates",
      key: "alangates",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Alan Gates",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-23T22:22:54.599Z",
    workRatio: -1,
    created: "2015-03-16T16:37:35.063Z",
    updated: "2015-05-18T19:52:21.855Z",
    description:
      "When an insert, update, or delete is done using dynamic partitioning the lock is obtained on the table instead of on the individual partitions, since the partitions are not known at lock acquisition time.  The compactor is using the locks to determine which partitions to check to see if they need compacted.  Since the individual partitions aren't locked they aren't checked.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary:
      "Compactor not running on partitions after dynamic partitioned insert",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782261/comment/14364475",
        id: "14364475",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
          name: "gates",
          key: "alangates",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Alan Gates",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This patch adds a new thrift call to add partitions after they are moved in the MoveTask.  It is called by Hive.loadDynamicPartitions.  It also fixes the Initiator to not attempt to compact temp tables or partitioned tables when no partitions are present.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
          name: "gates",
          key: "alangates",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Alan Gates",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T03:06:19.025+0000",
        updated: "2015-03-17T03:06:19.025+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782261/comment/14365090",
        id: "14365090",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704984/HIVE-9977.patch\n\n{color:green}SUCCESS:{color} +1 7774 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3054/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3054/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3054/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704984 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T13:17:58.514+0000",
        updated: "2015-03-17T13:17:58.514+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782261/comment/14369994",
        id: "14369994",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ekoifman",
          name: "ekoifman",
          key: "ekoifman",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Eugene Koifman",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          'A few minor nits:\nTestTxnHandler - unsed import\nTestCompactor - unused iimport each of the new tests have "List<String> names = new ArrayList<>(partNames);" in each of them.  My IDE complains about empty <>.\n\n+1\n',
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ekoifman",
          name: "ekoifman",
          key: "ekoifman",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Eugene Koifman",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-19T19:56:00.219+0000",
        updated: "2015-03-19T19:56:00.219+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782261/comment/14376766",
        id: "14376766",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
          name: "gates",
          key: "alangates",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Alan Gates",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Patch checked in.  I fixed the nits noted by Eugene.  I also fixed one of the tests that was updating a bucketing column as I believe Eugene is making that illegal (which it should be).  Thanks Eugene for the review.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=gates",
          name: "gates",
          key: "alangates",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Alan Gates",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-23T22:22:54.626+0000",
        updated: "2015-03-23T22:22:54.626+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782261/comment/14548845",
        id: "14548845",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:52:21.850+0000",
        updated: "2015-05-18T19:52:21.850+0000",
      },
    ],
  },
  {
    key: "HIVE-9976",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
      name: "sseth",
      key: "sseth",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Siddharth Seth",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
      name: "gopalv",
      key: "gopalv",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Gopal Vijayaraghavan",
      active: true,
      timeZone: "Asia/Kolkata",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
      name: "gopalv",
      key: "gopalv",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Gopal Vijayaraghavan",
      active: true,
      timeZone: "Asia/Kolkata",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-26T06:10:22.399Z",
    workRatio: -1,
    created: "2015-03-16T15:04:43.405Z",
    updated: "2015-05-18T19:51:02.642Z",
    description:
      "Race condition in the DynamicPartitionPruner between DynamicPartitionPruner::processVertex() and DynamicPartitionpruner::addEvent() for tasks which respond with both the result and success in a single heartbeat sequence.\n\n{code}\n2015-03-16 07:05:01,589 ERROR [InputInitializer [Map 1] #0] tez.DynamicPartitionPruner: Expecting: 1, received: 0\n2015-03-16 07:05:01,590 ERROR [Dispatcher thread: Central] impl.VertexImpl: Vertex Input: store_sales initializer failed, vertex=vertex_1424502260528_1113_4_04 [Map 1]\norg.apache.tez.dag.app.dag.impl.AMUserCodeException: org.apache.hadoop.hive.ql.metadata.HiveException: Incorrect event count in dynamic parition pruning\n{code}\n\n!llap_vertex_200ms.png!\n\nAll 4 upstream vertices of Map 1 need to finish within ~200ms to trigger this, which seems to be consistently happening with LLAP.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary:
      "Possible race condition in DynamicPartitionPruner for <200ms tasks",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14363839",
        id: "14363839",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "[~sseth] I thought this can't happen. The Tez API was supposed to guarantee delivery of events before completion. Should I open a Tez issue?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T20:21:32.038+0000",
        updated: "2015-03-16T20:21:32.038+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14363909",
        id: "14363909",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "I'll take a look. Assuming this was run with Tez 0.7 snapshot ?",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T20:50:51.822+0000",
        updated: "2015-03-16T20:50:51.822+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14364039",
        id: "14364039",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "[~gopalv] said that it was on tez 0.7.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T21:54:22.608+0000",
        updated: "2015-03-16T21:54:22.608+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14378766",
        id: "14378766",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This is not limited to LLAP. Assigning to myself - to change the handling of vertex success / init events.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-24T22:13:10.688+0000",
        updated: "2015-03-24T22:13:10.688+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14378786",
        id: "14378786",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Patch to handle out of order events. Also initializes the pruner during Input construction - so that events don't show up before the pruner is initialized. Adds a bunch of tests.\n\n[~hagleitn], [~vikram.dixit] - please review.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-24T22:22:20.022+0000",
        updated: "2015-03-24T22:22:20.022+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14379185",
        id: "14379185",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12707029/HIVE-9976.1.patch\n\n{color:red}ERROR:{color} -1 due to 1 failed/errored test(s), 8347 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestMinimrCliDriver.testCliDriver_schemeAuthority\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3139/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3139/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3139/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 1 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12707029 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-25T02:40:31.263+0000",
        updated: "2015-03-25T02:40:31.263+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380407",
        id: "14380407",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Not your fault - but there are 2 paths through HiveSplitGenerator. The class is used once without calling init and once being properly init'd. The reason is that some other code needs to use the \"group splits\" method. Since you've moved init to the constr now, this has gotten even uglier. Could you move the split grouper methods to a separate util class (static) and leave the pruner to just prune.\n\nAlso - I think you've moved the initialization of the dynamic pruner to the constr of the input initializer, in order to not miss any events. Can you add a comment to the code explaining this?\n\nVery cool to see a real unit test  :-) thanks.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T18:20:52.654+0000",
        updated: "2015-03-25T18:20:52.654+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380426",
        id: "14380426",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "i see you've fixed calling close consistently on the data input stream. maybe use try{}finally there?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T18:27:23.463+0000",
        updated: "2015-03-25T18:27:23.463+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380438",
        id: "14380438",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "it seems you're setting numexpectedevents to 0 first and then turn around and call decrement. Why not just set to -1? Also - why atomic integers? as far as i can tell all access to these maps is synchronized.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T18:30:40.812+0000",
        updated: "2015-03-25T18:30:40.812+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380446",
        id: "14380446",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "does it make sense to make initialize in the pruner private now? (can't be used to init anymore - only from the constr). Also, the parameters aren't used anymore, right?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T18:34:21.260+0000",
        updated: "2015-03-25T18:34:21.260+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380451",
        id: "14380451",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "other than the above looks good to me. like the extra comments and conditions you've put in!",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T18:36:02.951+0000",
        updated: "2015-03-25T18:36:02.951+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380683",
        id: "14380683",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Thanks for the review. Updated patch with comments addressed, and some more changes.\n\nbq. Not your fault - but there are 2 paths through HiveSplitGenerator.\nMoved the methods into SplitGrouper. There's a static cache in there which seems a little strange. Will create a follow up jira to investigate this. For now I've changed that to a ConcurrentMap since split generation can run in parallel.\n\nbq. i see you've fixed calling close consistently on the data input stream. maybe use try{}finally there?\nFixed. There was a bug with some of the other conditions which I'd changed. Fixed that as well.\n\nbq. it seems you're setting numexpectedevents to 0 first and then turn around and call decrement. Why not just set to -1? Also - why atomic integers? as far as i can tell all access to these maps is synchronized.\nnumExpectedEvents is decremented for each column for which a source will send events. That's used to track total number of expected events from that source. Added a comment for this.\nMoved from AtomicIntegers to MutableInt - this was just to avoid re-inserting the Integer into the map, and not for thread safety.\n\nbq. does it make sense to make initialize in the pruner private now? (can't be used to init anymore - only from the constr). Also, the parameters aren't used anymore, right?\nDone, along with some other methods.\n",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=sseth",
          name: "sseth",
          key: "sseth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Siddharth Seth",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T20:20:51.404+0000",
        updated: "2015-03-25T20:20:51.404+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14380740",
        id: "14380740",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T20:49:30.977+0000",
        updated: "2015-03-25T20:49:30.977+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14381320",
        id: "14381320",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12707303/HIVE-9976.2.patch\n\n{color:green}SUCCESS:{color} +1 8347 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3159/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3159/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3159/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12707303 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-26T04:04:39.001+0000",
        updated: "2015-03-26T04:04:39.001+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14381434",
        id: "14381434",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks [~sseth]!",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-26T06:10:22.448+0000",
        updated: "2015-03-26T06:10:22.448+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782225/comment/14548766",
        id: "14548766",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:51:02.626+0000",
        updated: "2015-05-18T19:51:02.626+0000",
      },
    ],
  },
  {
    key: "HIVE-9974",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-05-18T18:07:07.304Z",
    workRatio: -1,
    created: "2015-03-16T14:18:32.249Z",
    updated: "2016-02-16T23:53:01.326Z",
    description:
      'Set up a cluster, configured a redaction rule to redact "B0096EZHM2", and ran Hive queries on the cluster.\n\nLooking at the YARN RM web UI and Job History Server web UI, I see that the mapreduce jobs spawned by the Hive queries have the sensitive data ("B0096EZHM2") showing in the job names:\n\ne.g., "select product, useri...product=\'B0096EZHM2\'(Stage"',
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Sensitive data redaction: data appears in name of mapreduce job",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782207/comment/14363243",
        id: "14363243",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "Here's the patch.\nThere was one left method where needed the data redaction. Because execute() is executed after compileInternal(), then we just get the query already redacted from the conf variable. ",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-16T14:24:31.103+0000",
        updated: "2015-03-16T14:24:31.103+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782207/comment/14363245",
        id: "14363245",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body: "[~xuefuz] Could you help me review this code?\nThanks.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-16T14:25:00.017+0000",
        updated: "2015-03-16T14:25:00.017+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782207/comment/14363397",
        id: "14363397",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T16:01:01.119+0000",
        updated: "2015-03-16T16:01:01.119+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782207/comment/14363410",
        id: "14363410",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704778/HIVE-9974.1.patch\n\n{color:red}ERROR:{color} -1 due to 1 failed/errored test(s), 7764 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udaf_context_ngrams\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3042/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3042/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3042/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 1 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704778 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-16T16:12:29.088+0000",
        updated: "2015-03-16T16:12:29.088+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782207/comment/14548428",
        id: "14548428",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body: "Committed to master.\nThanks [~xuefuz] for your review.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-05-18T18:07:07.347+0000",
        updated: "2015-05-18T18:07:07.347+0000",
      },
    ],
  },
  {
    key: "TEZ-2202",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
      name: "gopalv",
      key: "gopalv",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Gopal Vijayaraghavan",
      active: true,
      timeZone: "Asia/Kolkata",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
      name: "gopalv",
      key: "gopalv",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Gopal Vijayaraghavan",
      active: true,
      timeZone: "Asia/Kolkata",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
      name: "gopalv",
      key: "gopalv",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Gopal Vijayaraghavan",
      active: true,
      timeZone: "Asia/Kolkata",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Apache Tez",
    resolutionDate: "2015-03-17T21:57:01.017Z",
    workRatio: -1,
    created: "2015-03-16T13:28:00.742Z",
    updated: "2015-06-30T04:52:43.483Z",
    description:
      "LocalTasks do not appear in YARN swimlanes due to the thread-ids containing the same characters as the logging boundaries of [].\n\nFix the thread-id to have the #<n> numbering scheme instead.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Fix LocalTaskExecutionThread ID to the standard thread numbering",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782198/comment/14363253",
        id: "14363253",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hadoopqa",
          name: "hadoopqa",
          key: "hadoopqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hadoopqa&avatarId=10393",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hadoopqa&avatarId=10393",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hadoopqa&avatarId=10393",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hadoopqa&avatarId=10393",
          },
          displayName: "Hadoop QA",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "{color:red}-1 overall{color}.  Here are the results of testing the latest attachment\n  http://issues.apache.org/jira/secure/attachment/12704770/TEZ-2202.1.patch\n  against master revision b18552b.\n\n    {color:green}+1 @author{color}.  The patch does not contain any @author tags.\n\n    {color:red}-1 tests included{color}.  The patch doesn't appear to include any new or modified tests.\n                        Please justify why no new tests are needed for this patch.\n                        Also please list what manual steps were performed to verify this patch.\n\n    {color:green}+1 javac{color}.  The applied patch does not increase the total number of javac compiler warnings.\n\n    {color:green}+1 javadoc{color}.  There were no new javadoc warning messages.\n\n    {color:green}+1 findbugs{color}.  The patch does not introduce any new Findbugs (version 2.0.3) warnings.\n\n    {color:green}+1 release audit{color}.  The applied patch does not increase the total number of release audit warnings.\n\n    {color:green}+1 core tests{color}.  The patch passed unit tests in .\n\nTest results: https://builds.apache.org/job/PreCommit-TEZ-Build/306//testReport/\nConsole output: https://builds.apache.org/job/PreCommit-TEZ-Build/306//console\n\nThis message is automatically generated.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hadoopqa",
          name: "hadoopqa",
          key: "hadoopqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hadoopqa&avatarId=10393",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hadoopqa&avatarId=10393",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hadoopqa&avatarId=10393",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hadoopqa&avatarId=10393",
          },
          displayName: "Hadoop QA",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-16T14:26:35.614+0000",
        updated: "2015-03-16T14:26:35.614+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782198/comment/14363688",
        id: "14363688",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T18:43:29.297+0000",
        updated: "2015-03-16T18:43:29.297+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782198/comment/14366170",
        id: "14366170",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committing shortly. ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T21:55:23.343+0000",
        updated: "2015-03-17T21:55:23.343+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782198/comment/14366173",
        id: "14366173",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Thanks [~gopalv]. Committed to master.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T21:57:19.762+0000",
        updated: "2015-03-17T21:57:19.762+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782198/comment/14607273",
        id: "14607273",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Closing issue as 0.5.4, 0.6.1 and 0.7.0 have been released. ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hitesh",
          name: "hitesh",
          key: "hitesh",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Hitesh Shah",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-06-30T04:52:43.480+0000",
        updated: "2015-06-30T04:52:43.480+0000",
      },
    ],
  },
  {
    key: "HIVE-9971",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-18T05:10:34.253Z",
    workRatio: -1,
    created: "2015-03-16T05:36:05.105Z",
    updated: "2015-05-18T19:51:43.586Z",
    description:
      "This is mostly cleanup although it does enhance the pipeline in one respect. It introduces asyn init for operators and uses it for hash table loading where desired.\n\nThere's a bunch of weird code associated with the operator class:\n\n- initialize isn't recursive, rather initializeOp is supposed to call initializeChildren. That has led to bugs in the past.\n\n- setExecContext and passExecContext. Both are recursive, but passExecContext calls setExecContext and then recurses again. Boo.\n\n- lots of (getChildren() != null) although that can't happen anymore\n\n- TezCacheAccess is a hack. We should just leave init of inputs up to the operator that needs it.\n\n- Need some sanity checks that make sure that operators were all initialized.\n\n",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Clean up operator class",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14362770",
        id: "14362770",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Oh there's also two minor nuisances:\n\n- processOp doesn't exist anymore. The contract in Operator is that xxx methods are template methods and xxxOp are the methods that the framework calls. With process that didn't work because it's the inner loop. So we nuked process and called processOp directly. Code would look much better though if we had nuked processOp and called everything process.\n\n- OpTraits should be called Traits. Like Statistics aren't called OpStatistics. Or children aren't called OpKids.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T05:40:10.248+0000",
        updated: "2015-03-16T05:40:10.248+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14362773",
        id: "14362773",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "https://reviews.apache.org/r/32092/",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T05:43:53.926+0000",
        updated: "2015-03-16T05:43:53.926+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14362870",
        id: "14362870",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704719/HIVE-9971.1.patch\n\n{color:red}ERROR:{color} -1 due to 204 failed/errored test(s), 7762 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_bucketmapjoin1\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_index_auto_mult_tables_compact\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udaf_context_ngrams\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_dynpart_sort_opt_vectorization\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_dynpart_sort_optimization2\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_orc_vectorization_ppd\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_tez_join_hash\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_between_in\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_bucket\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_char_mapjoin1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_char_simple\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_coalesce_2\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_data_types\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_10_0\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_2\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_3\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_4\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_5\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_6\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_aggregate\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_precision\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_trailing\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_udf\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_distinct_2\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_groupby_3\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_groupby_reduce\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_left_outer_join\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_mapjoin_reduce\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_non_string_partition\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_orderby_5\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_partition_diff_num_cols\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_partitioned_date_time\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_reduce_groupby_decimal\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_string_concat\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_varchar_mapjoin1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_varchar_simple\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_0\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_12\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_13\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_14\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_15\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_5\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_9\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_div0\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_limit\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_nested_udf\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_part\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_part_project\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_short_regress\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_date_funcs\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_dynamic_partition_pruning\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_nested_mapjoin\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_ptf\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_rcfile_columnar\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_timestamp_funcs\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_bucketmapjoin1\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_between_in\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_data_types\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_decimal_aggregate\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_distinct_2\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_groupby_3\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_left_outer_join\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_mapjoin_reduce\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_orderby_5\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_string_concat\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_0\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_12\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_13\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_14\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_15\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_5\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_9\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_div0\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_nested_udf\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_part\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_part_project\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_short_regress\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorized_nested_mapjoin\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorized_ptf\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorized_rcfile_columnar\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorized_timestamp_funcs\norg.apache.hadoop.hive.ql.exec.TestOperators.testMapOperator\norg.apache.hadoop.hive.ql.exec.vector.TestVectorFilterOperator.testBasicFilterLargeData\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgDecimalNegative\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongNullKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongRepeatConcatValues\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongRepeatNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testAvgLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testBigintKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testBooleanKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongNullKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongRepeatConcatValues\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongRepeatNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountReduce\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountStar\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountStringAllNull\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testCountStringWithNull\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDecimalKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeAvg\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeAvgOneKey\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeCount\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeMax\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeMaxOneKey\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeMin\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeMinOneKey\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeSum\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeSumOneKey\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeVariance\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testDoubleValueTypeVarianceOneKey\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testFloatKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testIntKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongMaxInt\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongMaxLong\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongNegative\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongNullKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxNullString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMaxString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMemoryPressureFlush\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongConcatRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongGroupBy\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongKeyGroupByCompactBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongKeyGroupByCrossBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongMinInt\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongMinLong\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongNegative\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongNullKeyGroupByCrossBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongNullKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongNullStringKeys\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongRepeatConcatValues\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongRepeatNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinLongStringKeys\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinNullLongNullKeyGroupBy\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMinString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMultiKeyDoubleShortString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMultiKeyDoubleStringInt\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMultiKeyIntStringInt\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMultiKeyIntStringString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMultiKeyStringByteString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testMultiKeyStringIntString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSmallintKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdDevLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdDevLongRepeatNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdDevSampLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdDevSampSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdPopDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testStdSampDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumDecimalHive6508\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumDoubleGroupByString\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumDoubleSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLong2MaxInt\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLong2MaxLong\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLong2MinInt\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLong2MinLong\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongMinMaxLong\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongNullKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongRepeatConcatValues\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongRepeatNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testSumLongZero\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testTimestampKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testTinyintKeyTypeAggregate\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarLongNullKeyGroupBySingleBatch\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarPopLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarPopLongRepeatNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarSampDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarSampLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarSampLongRepeat\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarSampLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarianceDecimal\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarianceLongEmpty\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarianceLongNulls\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarianceLongSimple\norg.apache.hadoop.hive.ql.exec.vector.TestVectorGroupByOperator.testVarianceLongSingle\norg.apache.hadoop.hive.ql.exec.vector.TestVectorSelectOperator.testSelectOperator\norg.apache.hive.hcatalog.hbase.TestPigHBaseStorageHandler.org.apache.hive.hcatalog.hbase.TestPigHBaseStorageHandler\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3040/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3040/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3040/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 204 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704719 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-16T07:34:40.701+0000",
        updated: "2015-03-16T07:34:40.701+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14363857",
        id: "14363857",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704823/HIVE-9971.2.patch\n\n{color:red}ERROR:{color} -1 due to 60 failed/errored test(s), 7754 tests executed\n*Failed tests:*\n{noformat}\nTestSparkCliDriver-parallel_join1.q-ptf_general_queries.q-avro_joins.q-and-12-more - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_bucketmapjoin1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_dynpart_sort_opt_vectorization\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_dynpart_sort_optimization2\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_between_in\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_bucket\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_char_mapjoin1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_char_simple\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_data_types\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_10_0\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_2\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_3\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_4\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_5\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_6\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_precision\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_trailing\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_decimal_udf\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_non_string_partition\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_orderby_5\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_partitioned_date_time\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_reduce_groupby_decimal\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_string_concat\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_varchar_mapjoin1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_varchar_simple\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_0\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_12\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_13\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_14\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_15\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_9\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_div0\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_limit\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_part\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_part_project\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorization_short_regress\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_date_funcs\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_rcfile_columnar\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vectorized_timestamp_funcs\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_bucketmapjoin1\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_between_in\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_data_types\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_orderby_5\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vector_string_concat\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_0\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_12\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_13\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_14\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_15\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_9\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_div0\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_part\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_part_project\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorization_short_regress\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorized_rcfile_columnar\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_vectorized_timestamp_funcs\norg.apache.hadoop.hive.ql.exec.TestOperators.testMapOperator\norg.apache.hadoop.hive.ql.exec.vector.TestVectorFilterOperator.testBasicFilterLargeData\norg.apache.hadoop.hive.ql.exec.vector.TestVectorSelectOperator.testSelectOperator\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3043/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3043/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3043/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 60 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704823 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-16T20:31:54.244+0000",
        updated: "2015-03-16T20:31:54.244+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14364893",
        id: "14364893",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705002/HIVE-9971.4.patch\n\n{color:red}ERROR:{color} -1 due to 2 failed/errored test(s), 7769 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_tez_bmj_schema_evolution\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_tez_smb_main\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3052/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3052/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3052/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 2 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705002 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T10:33:03.558+0000",
        updated: "2015-03-17T10:33:03.558+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14366292",
        id: "14366292",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=vikram.dixit",
          name: "vikram.dixit",
          key: "vikram.dixit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Vikram Dixit K",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Latest iteration looks good to me. +1 pending test results.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=vikram.dixit",
          name: "vikram.dixit",
          key: "vikram.dixit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Vikram Dixit K",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T23:20:07.958+0000",
        updated: "2015-03-17T23:20:07.958+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14366386",
        id: "14366386",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705177/HIVE-9971.5.patch\n\n{color:green}SUCCESS:{color} +1 7770 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3063/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3063/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3063/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705177 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-18T00:26:52.777+0000",
        updated: "2015-03-18T00:26:52.777+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14366653",
        id: "14366653",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks for the review [~vikram.dixit].",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-18T05:10:34.300+0000",
        updated: "2015-03-18T05:10:34.300+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12782131/comment/14548806",
        id: "14548806",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:51:43.581+0000",
        updated: "2015-05-18T19:51:43.581+0000",
      },
    ],
  },
  {
    key: "HIVE-9961",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
      name: "szehon",
      key: "szehon",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Szehon Ho",
      active: true,
      timeZone: "Europe/Paris",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
      name: "szehon",
      key: "szehon",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Szehon Ho",
      active: true,
      timeZone: "Europe/Paris",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
      name: "szehon",
      key: "szehon",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Szehon Ho",
      active: true,
      timeZone: "Europe/Paris",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-14T13:19:12.950Z",
    workRatio: -1,
    created: "2015-03-13T18:04:06.401Z",
    updated: "2015-05-18T19:51:13.649Z",
    description:
      "Run a 'create view' statement.\n\nThe view entity (which is in the hook's outputs) has a table with tableType 'MANAGED_TABLE').  It should be of type 'VIRTUAL_VIEW' so that auditing tools can correctly identify it as a view.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "HookContext for view should return a table type of VIRTUAL_VIEW",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781877/comment/14360827",
        id: "14360827",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        body:
          "Attaching a patch.  [~xuefuz] can you take a look?\n\nAlso [~thejas] for any comments.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        created: "2015-03-13T18:06:47.340+0000",
        updated: "2015-03-13T18:06:47.340+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781877/comment/14360837",
        id: "14360837",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1 pending on test.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-13T18:09:59.919+0000",
        updated: "2015-03-13T18:09:59.919+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781877/comment/14361067",
        id: "14361067",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1 LGTM\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-13T20:49:46.149+0000",
        updated: "2015-03-13T20:49:46.149+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781877/comment/14361254",
        id: "14361254",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704475/HIVE-9961.patch\n\n{color:green}SUCCESS:{color} +1 7764 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3037/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3037/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3037/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704475 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-13T22:56:21.216+0000",
        updated: "2015-03-13T22:56:21.216+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781877/comment/14361783",
        id: "14361783",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks, Szehon, Thejas.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-14T13:19:12.982+0000",
        updated: "2015-03-14T13:19:12.982+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781877/comment/14548776",
        id: "14548776",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:51:13.641+0000",
        updated: "2015-05-18T19:51:13.641+0000",
      },
    ],
  },
  {
    key: "HIVE-996",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self:
        "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
      name: "cwsteinbach",
      key: "cwsteinbach",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Carl Steinbach",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self:
        "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
      name: "cwsteinbach",
      key: "cwsteinbach",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Carl Steinbach",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self:
        "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
      name: "cwsteinbach",
      key: "cwsteinbach",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Carl Steinbach",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2010-01-07T02:59:24.921Z",
    workRatio: -1,
    created: "2009-12-18T01:37:21.619Z",
    updated: "2011-12-17T00:05:43.097Z",
    description:
      "{noformat}\nhive> describe function explode;\ndescribe function explode;\nFAILED: Error in metadata: java.lang.NullPointerException\nFAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask\nhive> describe function sum;\ndescribe function sum;\nFAILED: Error in metadata: java.lang.NullPointerException\nFAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask\nhive> describe function conv;\ndescribe function conv;\nOK\nconv(num, from_base, to_base) - convert num from from_base to to_base\nTime taken: 0.042 seconds\n{noformat}",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: '"describe function" throws NPE when when called on UDTF or UDAF',
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12792284",
        id: "12792284",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body: "blocker for 0.5",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2009-12-18T01:40:30.158+0000",
        updated: "2009-12-18T01:40:30.158+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12795708",
        id: "12795708",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=bjia",
          name: "bjia",
          key: "bjia",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Bill Jia",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          '(1) Standard apache header added into the new files. \n(2) Codes shared. Added a new file/class SortedArrayUtils.java with two static functions - static void binaryInsert(ArrayList<Double> array, Double value, boolean ascending), and static ArrayList<Double> sortedMerge(ArrayList<Double> a1, ArrayList<Double> a2, boolean ascending, int N). \n(3) Skipped "describe max_n; and describe extended max_n" in the q files, since the tests failed. ',
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=bjia",
          name: "bjia",
          key: "bjia",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Bill Jia",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2010-01-01T00:16:23.779+0000",
        updated: "2010-01-01T00:16:23.779+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797343",
        id: "12797343",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "* Fix 'describe function' and 'describe function extended' for UDTFs and UDAFs.\n* Differentiate between the case where a function does not exist and documentation for the function does not exist.\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-06T22:04:12.529+0000",
        updated: "2010-01-06T22:04:12.529+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797347",
        id: "12797347",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body: "Great, I will take a look at it right away",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2010-01-06T22:09:54.578+0000",
        updated: "2010-01-06T22:09:54.578+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797351",
        id: "12797351",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=zshao",
          name: "zshao",
          key: "zshao",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=zshao&avatarId=14358",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=zshao&avatarId=14358",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=zshao&avatarId=14358",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=zshao&avatarId=14358",
          },
          displayName: "Zheng Shao",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Overall it looks good.\n\n1. Can you add annotation for UDAFMax and UDAFMin?\n2. We need to treat GenericUDAFBridge specially in FunctionInfo.getFunctionClass (you already did it for GenericUDFBridge).\n\nI will leave the rest to Namit.\n",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=zshao",
          name: "zshao",
          key: "zshao",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=zshao&avatarId=14358",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=zshao&avatarId=14358",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=zshao&avatarId=14358",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=zshao&avatarId=14358",
          },
          displayName: "Zheng Shao",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-06T22:17:52.134+0000",
        updated: "2010-01-06T22:17:52.134+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797355",
        id: "12797355",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body: "+1\n\nlooks good - will commit if the tests pass",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2010-01-06T22:23:13.155+0000",
        updated: "2010-01-06T22:23:13.155+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797359",
        id: "12797359",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body: "@Carl, can you address Zheng's comments ?",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2010-01-06T22:30:27.974+0000",
        updated: "2010-01-06T22:30:27.974+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797361",
        id: "12797361",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "@Namit: working on it now.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-06T22:31:29.510+0000",
        updated: "2010-01-06T22:31:29.510+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797371",
        id: "12797371",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "* Added annotations for UDAFMax and UDAFMin.\n* Correctly handle the GenericUDAFBridge case in FunctionInfo.getFunctionClass().\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-06T22:54:30.433+0000",
        updated: "2010-01-06T22:54:30.433+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797396",
        id: "12797396",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body:
          "Dont you need to fix the output files udaf_max.q.out/udaf_min.q.out ?",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2010-01-06T23:42:24.407+0000",
        updated: "2010-01-06T23:42:24.407+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797402",
        id: "12797402",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "@namit: sorry, regenerating the patch...",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-07T00:02:58.213+0000",
        updated: "2010-01-07T00:02:58.213+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797407",
        id: "12797407",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "* Updated udaf_max.q.out and udaf_min.q.out\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-07T00:14:05.582+0000",
        updated: "2010-01-07T00:14:05.582+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797414",
        id: "12797414",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body:
          "Index: ql/src/test/results/clientpositive/udaf_max.q.out\n===================================================================\n--- ql/src/test/results/clientpositive/udaf_max.q.out   (revision 0)\n+++ ql/src/test/results/clientpositive/udaf_max.q.out   (revision 0)\n@@ -0,0 +1,20 @@\n+PREHOOK: query: DESCRIBE FUNCTION max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION max\n+POSTHOOK: type: DESCFUNCTION\n+There is no documentation for function max\n+PREHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+POSTHOOK: type: DESCFUNCTION\n+There is no documentation for function max\n+PREHOOK: query: DESCRIBE FUNCTION max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION max\n+POSTHOOK: type: DESCFUNCTION\n+There is no documentation for function max\n+PREHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+POSTHOOK: type: DESCFUNCTION\n+There is no documentation for function max\n\n\n\nIt is still the old one",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2010-01-07T00:27:13.391+0000",
        updated: "2010-01-07T00:27:13.391+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797428",
        id: "12797428",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "@Namit: updated udaf_max.q.out and udaf_min.q.out:\n\nIndex: ql/src/test/results/clientpositive/udaf_max.q.out\n===================================================================\n--- ql/src/test/results/clientpositive/udaf_max.q.out\t(revision 0)\n+++ ql/src/test/results/clientpositive/udaf_max.q.out\t(revision 0)\n@@ -0,0 +1,20 @@\n+PREHOOK: query: DESCRIBE FUNCTION max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION max\n+POSTHOOK: type: DESCFUNCTION\n+max(expr) - Returns the maximum value of expr\n+PREHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+POSTHOOK: type: DESCFUNCTION\n+max(expr) - Returns the maximum value of expr\n+PREHOOK: query: DESCRIBE FUNCTION max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION max\n+POSTHOOK: type: DESCFUNCTION\n+max(expr) - Returns the maximum value of expr\n+PREHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION EXTENDED max\n+POSTHOOK: type: DESCFUNCTION\n+max(expr) - Returns the maximum value of expr\n\nIndex: ql/src/test/results/clientpositive/udaf_min.q.out\n===================================================================\n--- ql/src/test/results/clientpositive/udaf_min.q.out\t(revision 0)\n+++ ql/src/test/results/clientpositive/udaf_min.q.out\t(revision 0)\n@@ -0,0 +1,20 @@\n+PREHOOK: query: DESCRIBE FUNCTION min\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION min\n+POSTHOOK: type: DESCFUNCTION\n+min(expr) - Returns the minimum value of expr\n+PREHOOK: query: DESCRIBE FUNCTION EXTENDED min\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION EXTENDED min\n+POSTHOOK: type: DESCFUNCTION\n+min(expr) - Returns the minimum value of expr\n+PREHOOK: query: DESCRIBE FUNCTION min\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION min\n+POSTHOOK: type: DESCFUNCTION\n+min(expr) - Returns the minimum value of expr\n+PREHOOK: query: DESCRIBE FUNCTION EXTENDED min\n+PREHOOK: type: DESCFUNCTION\n+POSTHOOK: query: DESCRIBE FUNCTION EXTENDED min\n+POSTHOOK: type: DESCFUNCTION\n+min(expr) - Returns the minimum value of expr",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=cwsteinbach",
          name: "cwsteinbach",
          key: "cwsteinbach",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Carl Steinbach",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2010-01-07T01:20:06.593+0000",
        updated: "2010-01-07T01:20:06.593+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12443714/comment/12797470",
        id: "12797470",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body: "Committed. Thanks Carl",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=namit",
          name: "namit",
          key: "namit",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Namit Jain",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2010-01-07T02:59:24.874+0000",
        updated: "2010-01-07T02:59:24.874+0000",
      },
    ],
  },
  {
    key: "HIVE-9957",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: ["TODOC1.2"],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
      name: "spena",
      key: "spena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Sergio Pe??a",
      active: true,
      timeZone: "America/Chicago",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=vivshri",
      name: "vivshri",
      key: "vivshri",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Vivek Shrivastava",
      active: true,
      timeZone: "Etc/UTC",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=vivshri",
      name: "vivshri",
      key: "vivshri",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Vivek Shrivastava",
      active: true,
      timeZone: "Etc/UTC",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-14T13:15:00.414Z",
    workRatio: -1,
    created: "2015-03-13T08:00:45.610Z",
    updated: "2015-05-18T19:48:53.140Z",
    description:
      'Getting this exception while accessing data through Hive. \n\nException in thread "main" java.lang.NoSuchMethodError: org.apache.hadoop.hdfs.DFSClient.getKeyProvider()Lorg/apache/hadoop/crypto/key/KeyProvider;\n        at org.apache.hadoop.hive.shims.Hadoop23Shims$HdfsEncryptionShim.<init>(Hadoop23Shims.java:1152)\n        at org.apache.hadoop.hive.shims.Hadoop23Shims.createHdfsEncryptionShim(Hadoop23Shims.java:1279)\n        at org.apache.hadoop.hive.ql.session.SessionState.getHdfsEncryptionShim(SessionState.java:392)\n        at org.apache.hadoop.hive.ql.parse.SemanticAnalyzer.isPathEncrypted(SemanticAnalyzer.java:1756)\n        at org.apache.hadoop.hive.ql.parse.SemanticAnalyzer.getStagingDirectoryPathname(SemanticAnalyzer.java:1875)\n        at org.apache.hadoop.hive.ql.parse.SemanticAnalyzer.getMetaData(SemanticAnalyzer.java:1689)\n        at org.apache.hadoop.hive.ql.parse.SemanticAnalyzer.getMetaData(SemanticAnalyzer.java:1427)\n        at org.apache.hadoop.hive.ql.parse.SemanticAnalyzer.genResolvedParseTree(SemanticAnalyzer.java:10132)\n        at org.apache.hadoop.hive.ql.parse.SemanticAnalyzer.analyzeInternal(SemanticAnalyzer.java:10147)\n        at org.apache.hadoop.hive.ql.parse.CalcitePlanner.analyzeInternal(CalcitePlanner.java:192)\n        at org.apache.hadoop.hive.ql.parse.BaseSemanticAnalyzer.analyze(BaseSemanticAnalyzer.java:222)\n        at org.apache.hadoop.hive.ql.Driver.compile(Driver.java:421)\n        at org.apache.hadoop.hive.ql.Driver.compile(Driver.java:307)\n        at org.apache.hadoop.hive.ql.Driver.compileInternal(Driver.java:1112)\n        at org.apache.hadoop.hive.ql.Driver.runInternal(Driver.java:1160)\n        at org.apache.hadoop.hive.ql.Driver.run(Driver.java:1049)\n        at org.apache.hadoop.hive.ql.Driver.run(Driver.java:1039)\n        at org.apache.hadoop.hive.cli.CliDriver.processLocalCmd(CliDriver.java:207)\n        at org.apache.hadoop.hive.cli.CliDriver.processCmd(CliDriver.java:159)\n        at org.apache.hadoop.hive.cli.CliDriver.processLine(CliDriver.java:370)\n        at org.apache.hadoop.hive.cli.CliDriver.executeDriver(CliDriver.java:754)\n        at org.apache.hadoop.hive.cli.CliDriver.run(CliDriver.java:675)\n        at org.apache.hadoop.hive.cli.CliDriver.main(CliDriver.java:615)\n        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n        at java.lang.reflect.Method.invoke(Method.java:606)\n        at org.apache.hadoop.util.RunJar.main(RunJar.java:212)\n',
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Hive 1.1.0 not compatible with Hadoop 2.4.0",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14360386",
        id: "14360386",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "cc: [~spena]",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-13T14:09:00.709+0000",
        updated: "2015-03-13T14:09:00.709+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14361378",
        id: "14361378",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704490/HIVE-9957.1.patch\n\n{color:green}SUCCESS:{color} +1 7764 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3038/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3038/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3038/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704490 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-14T00:18:55.877+0000",
        updated: "2015-03-14T00:18:55.877+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14361599",
        id: "14361599",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        body: "+1 , welcome fix",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        created: "2015-03-14T04:20:14.625+0000",
        updated: "2015-03-14T04:20:14.625+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14361781",
        id: "14361781",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks, Sergio.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-14T13:15:00.450+0000",
        updated: "2015-03-14T13:15:00.450+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14361793",
        id: "14361793",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=vivshri",
          name: "vivshri",
          key: "vivshri",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Vivek Shrivastava",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "Thanks all for quick resolution.\n\n\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=vivshri",
          name: "vivshri",
          key: "vivshri",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Vivek Shrivastava",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-14T14:02:40.824+0000",
        updated: "2015-03-14T14:02:40.824+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14362833",
        id: "14362833",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          "Since this is broken in 1.1.0 and fixed in 1.2.0, should it be documented in the wiki?\n\n* [Getting Started -- Requirements | https://cwiki.apache.org/confluence/display/Hive/GettingStarted#GettingStarted-Requirements]\n* [Installing Hive | https://cwiki.apache.org/confluence/display/Hive/AdminManual+Installation#AdminManualInstallation-InstallingHive]",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-16T07:03:56.263+0000",
        updated: "2015-03-16T07:03:56.263+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14363502",
        id: "14363502",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          '[~spena] Thanks for fix! However, there is one improvement that can be made in this fix. Exceptions are expensive, so rather than throwing them every time, we can use this design pattern followed for some other functions in Hadoop23Shims - \n\n{code}\n  protected static final Method accessMethod;\n  protected static final Method getPasswordMethod;\n\n  static {\n    Method m = null;\n    try {\n      m = FileSystem.class.getMethod("access", Path.class, FsAction.class);\n    } catch (NoSuchMethodException err) {\n      // This version of Hadoop does not support FileSystem.access().\n    }\n    accessMethod = m;\n\n    try {\n      m = Configuration.class.getMethod("getPassword", String.class);\n    } catch (NoSuchMethodException err) {\n      // This version of Hadoop does not support getPassword(), just retrieve password from conf.\n      m = null;\n    }\n    getPasswordMethod = m;\n  }\n{code}\n\nWould you be able to make that improvement ? We can use a new jira for that.\n',
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T17:13:25.333+0000",
        updated: "2015-03-16T17:13:25.333+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14363503",
        id: "14363503",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "[~leftylev] Yes, I think it would be useful to document it under those two sections. [~spena] Do you know the hadoop version that introduced this api ? (we should list that its broken for all 2.x versions earlier than that).",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T17:13:40.546+0000",
        updated: "2015-03-16T17:13:40.546+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14363532",
        id: "14363532",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "Yes, I will use this way to detect the method incompatibility. I see that using it as static, this try/catch will be called only once.\nThanks [~thejas]\n\n[~leftylev] The hadoop version that introduces encryption is 2.6.0.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-16T17:24:56.617+0000",
        updated: "2015-03-16T17:24:56.617+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14364472",
        id: "14364472",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body: "Added a TODOC1.2 label.\n\nDoes this only apply to Hive 1.1.0?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-17T02:57:25.636+0000",
        updated: "2015-03-17T02:57:25.636+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14365216",
        id: "14365216",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        body: "Yes. Encryption was merged on 1.1.0.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=spena",
          name: "spena",
          key: "spena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Sergio Pe??a",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T14:40:09.570+0000",
        updated: "2015-03-17T14:40:09.570+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14365298",
        id: "14365298",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=laurent.gay",
          name: "laurent.gay",
          key: "laurent.gay",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Laurent GAY",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "Thanks to change requirements (https://cwiki.apache.org/confluence/display/Hive/GettingStarted#GettingStarted-Requirements) to precise that Hive 1.1.0 runs only with Hadoop 2.6.x\nThanks to change download page (http://hive.apache.org/downloads.html):\n> 8 March 2015: release 1.1.0 available\n> This release works with Hadoop 1.x.y, 2.x.y\n> You can look at the complete JIRA change log for this release.\nTo\n> 8 March 2015: release 1.1.0 available\n> This release works only with Hadoop 2.6.y\n> You can look at the complete JIRA change log for this release.\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=laurent.gay",
          name: "laurent.gay",
          key: "laurent.gay",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Laurent GAY",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-17T15:12:33.529+0000",
        updated: "2015-03-17T15:12:33.529+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14506305",
        id: "14506305",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=subhashmv",
          name: "subhashmv",
          key: "subhashmv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "subhashmv",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "Hi guys,\nI am new to hadoop and finally installed hive but while loading the data i am getting the same error as above and i have noticed from you guys that we need to apply patch ...... So Please guide me how to apply this above patch file ....\nThanks ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=subhashmv",
          name: "subhashmv",
          key: "subhashmv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "subhashmv",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-22T02:55:12.082+0000",
        updated: "2015-04-22T02:55:12.082+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14506463",
        id: "14506463",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          'The Hive wiki has a section explaining how to apply a patch in the "How to Contribute" doc:\n\n* [How To Contribute -- Applying a Patch | https://cwiki.apache.org/confluence/display/Hive/HowToContribute#HowToContribute-ApplyingaPatch]',
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-04-22T05:40:00.511+0000",
        updated: "2015-04-22T05:40:00.511+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14506493",
        id: "14506493",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "[~subhashmv] If you don't want to build hive , you can also use Hive 1.0.0 (unless you are looking for some specific hive 1.1.0 feature).\n\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-04-22T06:08:52.084+0000",
        updated: "2015-04-22T06:08:52.084+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14509420",
        id: "14509420",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=subhashmv",
          name: "subhashmv",
          key: "subhashmv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "subhashmv",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "Actually i installed hive 1.0 version and hadoop 2.5 version it is saying that it is incompatible with the software so please tell me how to apply the patch i can't understand in the link provided by Lefty",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=subhashmv",
          name: "subhashmv",
          key: "subhashmv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "subhashmv",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-23T17:37:16.844+0000",
        updated: "2015-04-23T17:37:16.844+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14509790",
        id: "14509790",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "[~subhashmv] What error do you get with 1.0 and hadoop 2.5 ? I wasn't aware of such an issue.\n\nTo apply the patch, you need to checkout the code, apply the patch and build new hive package (tar.gz).\nAdditional build instructions are here -https://cwiki.apache.org/confluence/display/Hive/HiveDeveloperFAQ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-04-23T20:58:44.801+0000",
        updated: "2015-04-23T20:58:44.801+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781741/comment/14548656",
        id: "14548656",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:48:53.131+0000",
        updated: "2015-05-18T19:48:53.131+0000",
      },
    ],
  },
  {
    key: "HIVE-9941",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
      name: "sushanth",
      key: "sushanth",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
      },
      displayName: "Sushanth Sowmyan",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=oflebbe",
      name: "oflebbe",
      key: "oflebbe",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=oflebbe&avatarId=22238",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=oflebbe&avatarId=22238",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=oflebbe&avatarId=22238",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=oflebbe&avatarId=22238",
      },
      displayName: "Olaf Flebbe",
      active: true,
      timeZone: "Europe/Berlin",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=oflebbe",
      name: "oflebbe",
      key: "oflebbe",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=oflebbe&avatarId=22238",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=oflebbe&avatarId=22238",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=oflebbe&avatarId=22238",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=oflebbe&avatarId=22238",
      },
      displayName: "Olaf Flebbe",
      active: true,
      timeZone: "Europe/Berlin",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2016-10-24T17:39:02.677Z",
    workRatio: -1,
    created: "2015-03-12T10:27:21.275Z",
    updated: "2017-07-26T03:29:51.888Z",
    description:
      "sql std authorization works as expected.\n\nHowever if a table is partitioned any user can truncate it\nUser foo:\n{code}\ncreate table bla (a string) partitioned by (b string);\n#.. loading values ...\n{code}\n\nAdmin:\n{code}\n0: jdbc:hive2://localhost:10000/default> set role admin;\nNo rows affected (0,074 seconds)\n0: jdbc:hive2://localhost:10000/default> show grant on bla;\n+-----------+--------+------------+---------+-----------------+-----------------+------------+---------------+----------------+----------+--+\n| database  | table  | partition  | column  | principal_name  | principal_type  | privilege  | grant_option  |   grant_time   | grantor  |\n+-----------+--------+------------+---------+-----------------+-----------------+------------+---------------+----------------+----------+--+\n| default   | bla    |            |         | foo             | USER            | DELETE     | true          | 1426158997000  | foo      |\n| default   | bla    |            |         | foo             | USER            | INSERT     | true          | 1426158997000  | foo      |\n| default   | bla    |            |         | foo             | USER            | SELECT     | true          | 1426158997000  | foo      |\n| default   | bla    |            |         | foo             | USER            | UPDATE     | true          | 1426158997000  | foo      |\n+-----------+--------+------------+---------+-----------------+-----------------+------------+---------------+----------------+----------+--+\n{code}\n\nnow user olaf\n{code}\n0: jdbc:hive2://localhost:10000/default> select * from bla;\nError: Error while compiling statement: FAILED: HiveAccessControlException Permission denied: Principal [name=olaf, type=USER] does not have following privileges for operation QUERY [[SELECT] on Object [type=TABLE_OR_VIEW, name=default.bla]] (state=42000,code=40000)\n{code}\nworks as expected.\n\n\n_BUT_\n{code}\n0: jdbc:hive2://localhost:10000/default> truncate table bla;\nNo rows affected (0,18 seconds)\n{code}\n\n_And table is empty afterwards_.\n\n\nSimilarily: {{insert into table}} works, too.\n\n",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "sql std authorization on partitioned table: truncate and insert",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/14638331",
        id: "14638331",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=oflebbe",
          name: "oflebbe",
          key: "oflebbe",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=oflebbe&avatarId=22238",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=oflebbe&avatarId=22238",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=oflebbe&avatarId=22238",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=oflebbe&avatarId=22238",
          },
          displayName: "Olaf Flebbe",
          active: true,
          timeZone: "Europe/Berlin",
        },
        body: "Just verified it happens on 1.2.0 too",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=oflebbe",
          name: "oflebbe",
          key: "oflebbe",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=oflebbe&avatarId=22238",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=oflebbe&avatarId=22238",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=oflebbe&avatarId=22238",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=oflebbe&avatarId=22238",
          },
          displayName: "Olaf Flebbe",
          active: true,
          timeZone: "Europe/Berlin",
        },
        created: "2015-07-23T06:57:47.494+0000",
        updated: "2015-07-23T06:57:47.494+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15122303",
        id: "15122303",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Thanks for the report, Olaf! This issue is fixed as part of HIVE-12875.\n\nWe can close this issue as a duplicate of the other, but I think this is also a good jira to add in a testcase for the base issue. Attaching patch so that precommit tests pick this up.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-01-28T21:00:44.482+0000",
        updated: "2016-01-28T21:00:44.482+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15125128",
        id: "15125128",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12785024/HIVE-9941.patch\n\n{color:green}SUCCESS:{color} +1 due to 1 test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 5 failed/errored test(s), 10033 tests executed\n*Failed tests:*\n{noformat}\nTestMiniTezCliDriver-vector_left_outer_join2.q-vector_outer_join5.q-custom_input_output_format.q-and-12-more - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_authorization_uri_import\norg.apache.hive.jdbc.TestSSL.testSSLVersion\norg.apache.hive.service.TestHS2ImpersonationWithRemoteMS.org.apache.hive.service.TestHS2ImpersonationWithRemoteMS\norg.apache.hive.service.cli.TestEmbeddedThriftBinaryCLIService.testExecuteStatementAsync\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/6804/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/6804/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-6804/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 5 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12785024 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2016-01-30T23:16:12.005+0000",
        updated: "2016-01-30T23:16:12.005+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15126769",
        id: "15126769",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "The relevant test case passes, other failures are not related to this change : \n\nhttp://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/6804/testReport/org.apache.hadoop.hive.cli/TestNegativeCliDriver/testNegativeCliDriver_authorization_truncate_2/",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-02-01T18:44:12.496+0000",
        updated: "2016-02-01T18:44:12.496+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15299938",
        id: "15299938",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=jcamachorodriguez",
          name: "jcamachorodriguez",
          key: "jcamachorodriguez",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=34058",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=34058",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=34058",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=34058",
          },
          displayName: "Jesus Camacho Rodriguez",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "[~sushanth], ready to go into 2.1.0? Thanks",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=jcamachorodriguez",
          name: "jcamachorodriguez",
          key: "jcamachorodriguez",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=34058",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=34058",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=34058",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=34058",
          },
          displayName: "Jesus Camacho Rodriguez",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-05-25T11:56:27.333+0000",
        updated: "2016-05-25T11:56:27.333+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15300744",
        id: "15300744",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This currently only covers a testcase for a bug that was fixed in HIVE-12875, so you can ignore this jira for your 2.1.0 release.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-05-25T19:57:39.109+0000",
        updated: "2016-05-25T19:57:39.109+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15305168",
        id: "15305168",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12785024/HIVE-9941.patch\n\n{color:green}SUCCESS:{color} +1 due to 1 test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 252 failed/errored test(s), 6207 tests executed\n*Failed tests:*\n{noformat}\nTestCliDriver-alter_file_format.q-udf_tan.q-bucket_map_join_tez1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-alter_rename_table.q-udf_aes_decrypt.q-udf_add.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-alter_table_not_sorted.q-cbo_udf_max.q-exim_11_managed_external.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ambiguitycheck.q-udf_bitwise_and.q-insert_overwrite_directory.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_1_sql_std.q-disallow_incompatible_type_change_off.q-schema_evol_text_nonvec_mapwork_table.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_cli_nonsql.q-skewjoinopt19.q-tez_self_join.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_cli_stdconfigauth.q-str_to_map.q-touch.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_create_table_owner_privs.q-cte_7.q-groupby_sort_7.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_create_temp_table.q-update_all_partitioned.q-lock4.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_parts.q-authorization_view_1.q-parquet_map_of_maps.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_role_grant2.q-alter_char2.q-cbo_rp_subq_in.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-authorization_view_disable_cbo_4.q-unionDistinct_2.q-vector_partitioned_date_time.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-auto_join18.q-dynamic_partition_pruning.q-vectorized_bucketmapjoin1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-auto_join30.q-udf_bitmap_empty.q-input17.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-auto_join_reordering_values.q-partition_timestamp2.q-ops_comparison.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-auto_sortmerge_join_7.q-exim_04_evolved_parts.q-query_with_semi.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-autogen_colalias.q-skewjoinopt3.q-rcfile_merge1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-avro_add_column.q-bucketmapjoin_negative.q-bucket_map_join_spark2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ba_table1.q-udf_notequal.q-input_part1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-bucketcontext_4.q-orc_ends_with_nulls.q-correlationoptimizer9.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-bucketsortoptimize_insert_7.q-list_bucket_query_multiskew_1.q-skewjoin_noskew.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cast_to_int.q-literal_double.q-skewjoinopt20.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_gby_empty.q-load_nonpart_authsuccess.q-truncate_table.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_join1.q-union_top_level.q-join18.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_limit.q-load_exist_part_authsuccess.q-schema_evol_text_nonvec_mapwork_part_all_primitive.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_lineage2.q-authorization_update.q-udf_pmod.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_semijoin.q-custom_input_output_format.q-udf_reflect2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_udf_udaf.q-date_udf.q-limit0.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cbo_rp_views.q-orc_split_elimination.q-udf_xpath_string.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-columnStatsUpdateForStatsOptimizer_2.q-cp_mj_rc.q-show_columns.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-columnstats_partlvl_dp.q-input31.q-udaf_percentile.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-compute_stats_string.q-noalias_subq1.q-input43.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-create_func1.q-bucketmapjoin3.q-enforce_order.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-create_genericudf.q-dynamic_partition_insert.q-skewjoinopt16.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-create_or_replace_view.q-compute_stats_double.q-reduce_deduplicate_exclude_gby.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-cte_mat_1.q-groupby_sort_6.q-update_after_multiple_inserts_special_characters.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-decimal_join.q-mapjoin_addjar.q-udf_xpath.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-drop_index.q-vector_date_1.q-multi_insert_with_join.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-dynpart_sort_optimization2.q-decimal_3.q-tez_dynpart_hashjoin_3.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-encryption_join_with_different_encryption_keys.q-bucketcontext_3.q-udf_smallint.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-exchange_partition2.q-constprog_semijoin.q-udf_initcap.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-gby_star.q-lateral_view_cp.q-cast_qualified_types.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby3_map.q-current_date_timestamp.q-skewjoinopt8.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby4.q-convert_enum_to_string.q-mapjoin_filter_on_outerjoin.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby_complex_types.q-auto_join9.q-vector_decimal_round.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby_grouping_id2.q-insert_values_nonascii.q-vectorization_13.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby_grouping_sets5.q-show_tblproperties.q-list_bucket_dml_1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby_map_ppr_multi_distinct.q-vectorization_16.q-union_remove_15.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-groupby_sort_test_1.q-udf_upper.q-ppd_outer_join2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-index_bitmap_rc.q-desc_tbl_part_cols.q-bucketmapjoin10.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-index_compact.q-merge_dynamic_partition2.q-cbo_rp_subq_exists.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-index_compact_2.q-bucketmapjoin12.q-udf_percentile.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-infer_bucket_sort_multi_insert.q-vector_custom_udf_configure.q-udf4.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-input19.q-offset_limit_ppd_optimizer.q-index_auth.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-insert_values_non_partitioned.q-schema_evol_orc_nonvec_mapwork_part.q-insert_nonacid_from_acid.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-join13.q-udf_bitwise_shiftleft.q-join_reorder3.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-join36.q-merge_dynamic_partition5.q-mapjoin_decimal.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-join4.q-authorization_index.q-add_part_exist.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-join9.q-progress_1.q-plan_json.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-join_cond_pushdown_unqual4.q-create_skewed_table1.q-constantPropWhen.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-keyword_2.q-input10.q-ppd_multi_insert.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-lateral_view_noalias.q-input11_limit.q-orc_llap.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-list_bucket_dml_9.q-insert_into_with_schema.q-udaf_covar_samp.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-load_dyn_part5.q-notable_alias3.q-type_conversions_1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-load_orc_part.q-infer_bucket_sort.q-nonreserved_keywords_input37.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-masking_disablecbo_3.q-vector_outer_join5.q-mapreduce1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-metadata_export_drop.q-udf_reverse.q-recursive_dir.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-multi_insert_mixed.q-showparts.q-skewjoinopt21.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-optional_outer.q-ptf_rcfile.q-avrocountemptytbl.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-orc_merge10.q-groupby8_map.q-exim_14_managed_location_over_existing.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-orc_ppd_decimal.q-alter_partition_clusterby_sortby.q-index_auto_file_format.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-orc_ppd_is_null.q-auto_join20.q-union_fast_stats.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-order_null.q-join_filters.q-drop_partitions_filter3.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-parallel_join1.q-escape_distributeby1.q-create_view_partitioned.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-parquet_avro_array_of_primitives.q-fileformat_sequencefile.q-authorization_grant_public_role.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-parquet_ppd_decimal.q-cluster.q-tez_schema_evolution.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-part_inherit_tbl_props_with_star.q-udf_asin.q-windowing_multipartitioning.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-partition_timestamp.q-ba_table_union.q-ppd_random.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ppd_constant_where.q-cross_join_merge.q-skewjoinopt13.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ppd_gby2.q-groupby10.q-udf5.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ppd_join3.q-authorization_delete_own_table.q-udf_equal.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ppd_join4.q-describe_xpath.q-show_indexes_edge_cases.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ppd_transform.q-orc_merge9.q-ba_table3.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ppd_union.q-udf_round_3.q-groupby12.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ptf_general_queries.q-unionDistinct_1.q-groupby1_noskew.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ptf_seqfile.q-constprog_dpp.q-udaf_number_format.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-push_or.q-infer_bucket_sort_list_bucket.q-exim_18_part_external.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-ql_rewrite_gbtoidx.q-udf_lessthanorequal.q-cbo_rp_udf_percentile2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-repair.q-date_comparison.q-columnstats_tbllvl.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-repl_2_exim_basic.q-udf_replace.q-input44.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-sample2.q-correlationoptimizer10.q-lineage1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-sample_islocalmode_hook_use_metadata.q-bool_literal.q-authorization_cli_createtab.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-schema_evol_text_vec_mapwork_part_all_complex.q-deleteAnalyze.q-union19.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-script_pipe.q-auto_join24.q-cast1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-show_conf.q-nonblock_op_deduplicate.q-avro_joins.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-skewjoin_mapjoin11.q-avro_decimal_native.q-udf_E.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-skewjoin_mapjoin4.q-groupby6_map.q-cbo_rp_union.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-skewjoin_union_remove_2.q-ppd1.q-avro_nullable_fields.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-skewjoinopt15.q-join39.q-exim_07_all_part_over_nonoverlap.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-smb_mapjoin_15.q-parquet_ppd_char.q-mapreduce2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-smb_mapjoin_4.q-udf_to_unix_timestamp.q-tez_union.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-sort_merge_join_desc_1.q-cbo_input26.q-udf_subtract.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-sort_merge_join_desc_3.q-join2.q-acid_globallimit.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-special_character_in_tabnames_2.q-union_remove_23.q-join_grp_diff_keys.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-stats12.q-llap_acid.q-vector_udf1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-stats13.q-join_parse.q-sort_merge_join_desc_2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-table_access_keys_stats.q-bucketsortoptimize_insert_4.q-reducesink_dedup.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-temp_table_display_colstats_tbllvl.q-udf_regexp_replace.q-udf_sign.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-tez_joins_explain.q-rename_column.q-varchar_serde.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-tez_smb_empty.q-char_2.q-udf_date_sub.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-timestamp_lazy.q-groupby_ppd.q-parquet_types.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-timestamp_literal.q-inputddl8.q-runtime_skewjoin_mapjoin_spark.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udaf_collect_set_2.q-orc_vectorization_ppd.q-struct_in_view.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_array.q-udf_quarter.q-union_remove_10.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_bitwise_or.q-udf_repeat.q-udf_string.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_case.q-orc_empty_files.q-avro_decimal.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_current_user.q-join44.q-union2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_decode.q-load_fs.q-auto_sortmerge_join_13.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_degrees.q-vector_outer_join0.q-list_bucket_query_multiskew_2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_double.q-join11.q-join41.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_explode.q-index_auto_update.q-parallel_join0.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_lessthan.q-select_unquote_not.q-udf6.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_locate.q-join32_lessSize.q-correlationoptimizer8.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_log2.q-explainuser_4.q-alter_merge_stats.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_nvl.q-alter_char1.q-serde_reported_schema.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_rpad.q-orc_createas1.q-nullinput.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_second.q-avro_add_column3.q-groupby4_noskew.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_size.q-authorization_5.q-infer_bucket_sort_grouping_operators.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_testlength2.q-skewjoin_mapjoin7.q-orc_ppd_varchar.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_to_float.q-decimal_precision2.q-ppd_gby_join.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udf_var_samp.q-drop_index_removes_partition_dirs.q-load_dyn_part2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-udtf_posexplode.q-orc_merge6.q-udf_exp.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-unicode_notation.q-gen_udf_example_add10.q-stats_publisher_error_1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-union29.q-udf_hash.q-lock1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-union36.q-acid_join.q-part_inherit_tbl_props_empty.q-and-6-more - did not produce a TEST-*.xml file\nTestCliDriver-union5.q-udf_lower.q-allcolref_in_udf.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-union_remove_7.q-alter_view_as_select.q-smb_mapjoin_13.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-update_orig_table.q-order.q-compute_stats_date.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-varchar_nested_types.q-masking_disablecbo_1.q-leadlag.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_acid3.q-input1_limit.q-ba_table_udfs.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_coalesce.q-fileformat_text.q-load_dyn_part12.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_complex_join.q-interval_udf.q-udf_classloader_dynamic_dependency_resolution.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_decimal_10_0.q-insert_values_partitioned.q-partition_vs_table_metadata.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_decimal_trailing.q-udf_concat_ws.q-input_dynamicserde.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_distinct_2.q-nullscript.q-vector_char_mapjoin1.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_grouping_sets.q-exchange_partition.q-udf_cbrt.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_interval_2.q-vectorization_10.q-list_bucket_dml_2.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_join.q-decimal_2.q-union32.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vector_partition_diff_num_cols.q-stats2.q-union11.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-vectorized_parquet.q-binarysortable_1.q-unionall_unbalancedppd.q-and-12-more - did not produce a TEST-*.xml file\nTestCliDriver-view.q-udf2.q-cte_4.q-and-12-more - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_binary_binary.q-ppd_key_ranges.q-hbase_custom_key3.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_binary_external_table_queries.q-hbase_custom_key.q-hbase_timestamp.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_binary_map_queries.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_binary_map_queries_prefix.q-external_table_ppd.q-hbase_ppd_join.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_binary_storage_queries.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_handler_bulk.q-hbase_custom_key2.q-hbase_single_sourced_multi_insert.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_joins.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_ppd_key_range.q-hbase_pushdown.q-hbase_null_first_col.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_queries.q - did not produce a TEST-*.xml file\nTestHBaseCliDriver-hbase_timestamp_format.q-hbase_handler_snapshot.q-hbase_scan_params.q - did not produce a TEST-*.xml file\nTestHWISessionManager - did not produce a TEST-*.xml file\nTestJdbcWithMiniHA - did not produce a TEST-*.xml file\nTestJdbcWithMiniMr - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-auto_join1.q-schema_evol_text_vec_mapwork_part_all_complex.q-vector_complex_join.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-auto_join30.q-vector_decimal_10_0.q-acid_globallimit.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-auto_sortmerge_join_16.q-skewjoin.q-vectorization_div0.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-auto_sortmerge_join_7.q-orc_merge9.q-tez_union_dynamic_partition.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-constprog_dpp.q-dynamic_partition_pruning.q-vectorization_10.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-cte_4.q-vector_non_string_partition.q-delete_where_non_partitioned.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-dynpart_sort_optimization2.q-tez_dynpart_hashjoin_3.q-orc_vectorization_ppd.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-enforce_order.q-vector_partition_diff_num_cols.q-unionDistinct_1.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-explainuser_4.q-update_after_multiple_inserts.q-mapreduce2.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-groupby2.q-tez_dynpart_hashjoin_1.q-custom_input_output_format.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-join1.q-mapjoin_decimal.q-union5.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-load_dyn_part2.q-selectDistinctStar.q-vector_decimal_5.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-mapjoin_mapjoin.q-insert_into1.q-vector_decimal_2.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-order_null.q-vector_acid3.q-orc_merge10.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-schema_evol_text_nonvec_mapwork_table.q-vector_decimal_trailing.q-subquery_in.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-script_pipe.q-vector_decimal_aggregate.q-vector_data_types.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-smb_cache.q-transform_ppr2.q-vector_outer_join0.q-and-5-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-tez_union_group_by.q-vector_auto_smb_mapjoin_14.q-union_fast_stats.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-update_orig_table.q-union2.q-bucket4.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vector_coalesce.q-cbo_windowing.q-tez_join.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vector_distinct_2.q-tez_joins_explain.q-cte_mat_1.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vector_grouping_sets.q-update_all_partitioned.q-cte_5.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vector_interval_2.q-schema_evol_text_nonvec_mapwork_part_all_primitive.q-tez_fsstat.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vectorization_13.q-auto_sortmerge_join_13.q-tez_bmj_schema_evolution.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vectorization_16.q-vector_decimal_round.q-orc_merge6.q-and-12-more - did not produce a TEST-*.xml file\nTestMiniTezCliDriver-vectorized_parquet.q-insert_values_non_partitioned.q-schema_evol_orc_nonvec_mapwork_part.q-and-12-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-bucket6.q-scriptfile1_win.q-quotedid_smb.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-bucket_num_reducers.q-table_nonprintable.q-scriptfile1.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-bucketmapjoin6.q-leftsemijoin_mr.q-bucket5.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-external_table_with_space_in_location_path.q-schemeAuthority2.q-auto_sortmerge_join_16.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-groupby2.q-infer_bucket_sort_map_operators.q-load_hdfs_file_with_space_in_the_name.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-import_exported_table.q-truncate_column_buckets.q-bucket_num_reducers2.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-index_bitmap3.q-bucketizedhiveinputformat.q-orc_mr_pathalias.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_num_buckets.q-infer_bucket_sort_reducers_power_two.q-parallel_orderby.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-insert_dir_distcp.q-skewjoin_onesideskew.q-bucket_many.q - did not produce a TEST-*.xml file\nTestMinimrCliDriver-join1.q-infer_bucket_sort_bucketed_table.q-root_dir_external_table.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-list_bucket_dml_10.q-input16_cc.q-temp_table_external.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-orc_merge_diff_fs.q-bucket4.q-file_with_header_footer.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-reduce_deduplicate.q-disable_merge_for_bucketing.q-infer_bucket_sort_dyn_part.q-and-1-more - did not produce a TEST-*.xml file\nTestNegativeCliDriver-udf_invalid.q-nopart_insert.q-insert_into_with_schema.q-and-735-more - did not produce a TEST-*.xml file\nTestNegativeMinimrCliDriver-mapreduce_stack_trace_hadoop20.q - did not produce a TEST-*.xml file\nTestNegativeMinimrCliDriver-udf_local_resource.q-mapreduce_stack_trace_turnoff_hadoop20.q-mapreduce_stack_trace.q-and-6-more - did not produce a TEST-*.xml file\nTestOperationLoggingAPIWithTez - did not produce a TEST-*.xml file\nTestSparkCliDriver-auto_join30.q-join2.q-input17.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-auto_join9.q-groupby_map_ppr.q-ppd_join3.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-auto_join_reordering_values.q-ptf_seqfile.q-auto_join18.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-avro_joins.q-join36.q-join1.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-bucketmapjoin10.q-join_rc.q-skewjoinopt13.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-bucketmapjoin3.q-enforce_order.q-union11.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-bucketsortoptimize_insert_7.q-smb_mapjoin_15.q-mapreduce1.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby10.q-groupby4_noskew.q-union5.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby2.q-custom_input_output_format.q-join41.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby2_noskew_multi_distinct.q-vectorization_10.q-list_bucket_dml_2.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby3_map.q-skewjoinopt8.q-union_remove_1.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby6_map.q-join13.q-join_reorder3.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby_complex_types.q-groupby_map_ppr_multi_distinct.q-vectorization_16.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-groupby_grouping_id2.q-vectorization_13.q-auto_sortmerge_join_13.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-join4.q-groupby_cube1.q-auto_join20.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-join9.q-join_casesensitive.q-filter_join_breaktask.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-join_cond_pushdown_3.q-groupby7.q-auto_join17.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-join_cond_pushdown_unqual4.q-bucketmapjoin12.q-avro_decimal_native.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-join_vc.q-input1_limit.q-join16.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-load_dyn_part5.q-load_dyn_part2.q-skewjoinopt16.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-mapreduce2.q-groupby7_noskew.q-vectorization_5.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-multi_insert.q-join5.q-groupby6.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-order.q-auto_join18_multi_distinct.q-union2.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-parallel_join1.q-escape_distributeby1.q-auto_sortmerge_join_7.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-ppd_transform.q-union_remove_7.q-date_udf.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-ptf_general_queries.q-groupby4.q-tez_joins_explain.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-ptf_rcfile.q-bucketmapjoin_negative.q-bucket_map_join_spark2.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-script_pipe.q-stats12.q-auto_join24.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-skewjoin_noskew.q-sample2.q-skewjoinopt10.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-skewjoin_union_remove_2.q-timestamp_null.q-union32.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-skewjoinopt15.q-join39.q-avro_joins_native.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-skewjoinopt3.q-union27.q-multigroupby_singlemr.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-smb_mapjoin_4.q-groupby8_map.q-groupby4_map.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-stats13.q-stats2.q-ppd_gby_join.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-table_access_keys_stats.q-bucketsortoptimize_insert_4.q-runtime_skewjoin_mapjoin_spark.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-timestamp_lazy.q-union29.q-join23.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-union_remove_23.q-transform_ppr2.q-join20.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-union_top_level.q-join11.q-auto_join1.q-and-12-more - did not produce a TEST-*.xml file\nTestSparkCliDriver-vector_distinct_2.q-join15.q-load_dyn_part3.q-and-12-more - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestMiniSparkOnYarnCliDriver.testCliDriver_constprog_partitioner\norg.apache.hadoop.hive.cli.TestMiniSparkOnYarnCliDriver.testCliDriver_index_bitmap3\norg.apache.hadoop.hive.llap.tez.TestConverters.testFragmentSpecToTaskSpec\norg.apache.hadoop.hive.llap.tezplugins.TestLlapTaskSchedulerService.testDelayedLocalityNodeCommErrorImmediateAllocation\norg.apache.hadoop.hive.ql.lockmgr.TestDbTxnManager2.testLocksInSubquery\norg.apache.hadoop.hive.ql.security.TestStorageBasedMetastoreAuthorizationDrops.testDropPartition\n{noformat}\n\nTest results: http://ec2-54-177-240-2.us-west-1.compute.amazonaws.com/job/PreCommit-HIVE-MASTER-Build/408/testReport\nConsole output: http://ec2-54-177-240-2.us-west-1.compute.amazonaws.com/job/PreCommit-HIVE-MASTER-Build/408/console\nTest logs: http://ec2-50-18-27-0.us-west-1.compute.amazonaws.com/logs/PreCommit-HIVE-MASTER-Build-408/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 252 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12785024 - PreCommit-HIVE-MASTER-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2016-05-28T04:26:43.705+0000",
        updated: "2016-05-28T04:26:43.705+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15307174",
        id: "15307174",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12785024/HIVE-9941.patch\n\n{color:green}SUCCESS:{color} +1 due to 1 test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 13 failed/errored test(s), 10187 tests executed\n*Failed tests:*\n{noformat}\nTestHWISessionManager - did not produce a TEST-*.xml file\nTestJdbcWithMiniHA - did not produce a TEST-*.xml file\nTestJdbcWithMiniMr - did not produce a TEST-*.xml file\nTestOperationLoggingAPIWithTez - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_ivyDownload\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_list_bucket_dml_12\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_list_bucket_dml_13\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_stats_list_bucket\norg.apache.hadoop.hive.cli.TestMiniSparkOnYarnCliDriver.testCliDriver_constprog_partitioner\norg.apache.hadoop.hive.cli.TestMiniSparkOnYarnCliDriver.testCliDriver_index_bitmap3\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_vector_complex_all\norg.apache.hadoop.hive.llap.tez.TestConverters.testFragmentSpecToTaskSpec\norg.apache.hadoop.hive.ql.lockmgr.TestDbTxnManager2.testLocksInSubquery\n{noformat}\n\nTest results: http://ec2-54-177-240-2.us-west-1.compute.amazonaws.com/job/PreCommit-HIVE-MASTER-Build/461/testReport\nConsole output: http://ec2-54-177-240-2.us-west-1.compute.amazonaws.com/job/PreCommit-HIVE-MASTER-Build/461/console\nTest logs: http://ec2-50-18-27-0.us-west-1.compute.amazonaws.com/logs/PreCommit-HIVE-MASTER-Build-461/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 13 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12785024 - PreCommit-HIVE-MASTER-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2016-05-31T04:24:14.771+0000",
        updated: "2016-05-31T04:24:14.771+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15583937",
        id: "15583937",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Added export ptn to the prev test as well.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-10-18T00:20:04.197+0000",
        updated: "2016-10-18T00:20:04.197+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15583993",
        id: "15583993",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Actually, I'll hold off my +1 until we see the ptest run, per the discussed new guildlines for waiting on test results before committing.\nBut the test cases look good to me.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-10-18T00:47:02.025+0000",
        updated: "2016-10-18T00:47:02.025+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15584145",
        id: "15584145",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Actually, I have a further update, with import and drop ptn as well. I was assuming this was tested elsewhere, but apparently not. Added them in.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-10-18T02:05:53.054+0000",
        updated: "2016-10-18T02:05:53.054+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15584689",
        id: "15584689",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12833864/HIVE-9941.3.patch\n\n{color:green}SUCCESS:{color} +1 due to 4 test(s) being added or modified.\n\n{color:red}ERROR:{color} -1 due to 8 failed/errored test(s), 10596 tests executed\n*Failed tests:*\n{noformat}\nTestBeelineWithHS2ConnectionFile - did not produce a TEST-*.xml file (likely timed out) (batchId=197)\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver[acid_globallimit] (batchId=27)\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver[order_null] (batchId=18)\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver[union_fast_stats] (batchId=46)\norg.apache.hive.beeline.TestBeelineArgParsing.testAddLocalJarWithoutAddDriverClazz[0] (batchId=155)\norg.apache.hive.beeline.TestBeelineArgParsing.testAddLocalJar[0] (batchId=155)\norg.apache.hive.beeline.TestBeelineArgParsing.testAddLocalJar[1] (batchId=155)\norg.apache.hive.jdbc.authorization.TestJdbcWithSQLAuthorization.testBlackListedUdfUsage (batchId=204)\n{noformat}\n\nTest results: https://builds.apache.org/job/PreCommit-HIVE-Build/1612/testReport\nConsole output: https://builds.apache.org/job/PreCommit-HIVE-Build/1612/console\nTest logs: http://104.198.109.242/logs/PreCommit-HIVE-Build-1612/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.TestCheckPhase\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 8 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12833864 - PreCommit-HIVE-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2016-10-18T07:07:16.917+0000",
        updated: "2016-10-18T07:07:16.917+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15586486",
        id: "15586486",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "+1\nTest failures not related and already have existing issues filed for them under HIVE-14547.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-10-18T19:48:19.397+0000",
        updated: "2016-10-18T19:48:19.397+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15602676",
        id: "15602676",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to master.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2016-10-24T17:39:02.788+0000",
        updated: "2016-10-24T17:39:02.788+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15604412",
        id: "15604412",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          "Is this just a bug fix, or is it a change of behavior that should be documented in the wiki?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2016-10-25T06:48:04.286+0000",
        updated: "2016-10-25T06:48:04.286+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781462/comment/15604595",
        id: "15604595",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          "Nevermind, this just adds some tests.  See Sushanth's comment Jan. 28:\n\nbq.  ... This issue is fixed as part of HIVE-12875.  We can close this issue as a duplicate of the other, but I think this is also a good jira to add in a testcase for the base issue. ...\n\nSo no doc needed.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2016-10-25T08:09:28.807+0000",
        updated: "2016-10-25T08:09:28.807+0000",
      },
    ],
  },
  {
    key: "HIVE-9936",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self:
        "https://issues.apache.org/jira/rest/api/2/user?username=apivovarov",
      name: "apivovarov",
      key: "apivovarov",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=apivovarov&avatarId=25851",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=apivovarov&avatarId=25851",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=apivovarov&avatarId=25851",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=apivovarov&avatarId=25851",
      },
      displayName: "Alexander Pivovarov",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self:
        "https://issues.apache.org/jira/rest/api/2/user?username=apivovarov",
      name: "apivovarov",
      key: "apivovarov",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=apivovarov&avatarId=25851",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=apivovarov&avatarId=25851",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=apivovarov&avatarId=25851",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=apivovarov&avatarId=25851",
      },
      displayName: "Alexander Pivovarov",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self:
        "https://issues.apache.org/jira/rest/api/2/user?username=apivovarov",
      name: "apivovarov",
      key: "apivovarov",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=apivovarov&avatarId=25851",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=apivovarov&avatarId=25851",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=apivovarov&avatarId=25851",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=apivovarov&avatarId=25851",
      },
      displayName: "Alexander Pivovarov",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-16T17:41:13.665Z",
    workRatio: -1,
    created: "2015-03-12T03:27:11.338Z",
    updated: "2015-05-18T19:52:59.170Z",
    description:
      "In some cases DefaultUDAFEvaluatorResolver calls new AmbiguousMethodException(udafClass, null, null)  (line 94)\nThis will throw NPE because AmbiguousMethodException calls argTypeInfos.toString()\nargTypeInfos is the second parameter and it can not be null.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "fix potential NPE in DefaultUDAFEvaluatorResolver",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781396/comment/14358044",
        id: "14358044",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=apivovarov",
          name: "apivovarov",
          key: "apivovarov",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=apivovarov&avatarId=25851",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=apivovarov&avatarId=25851",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=apivovarov&avatarId=25851",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=apivovarov&avatarId=25851",
          },
          displayName: "Alexander Pivovarov",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "patch #1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=apivovarov",
          name: "apivovarov",
          key: "apivovarov",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=apivovarov&avatarId=25851",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=apivovarov&avatarId=25851",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=apivovarov&avatarId=25851",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=apivovarov&avatarId=25851",
          },
          displayName: "Alexander Pivovarov",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-12T03:32:01.219+0000",
        updated: "2015-03-12T03:32:01.219+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781396/comment/14358339",
        id: "14358339",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-12T09:03:13.149+0000",
        updated: "2015-03-12T09:03:13.149+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781396/comment/14358471",
        id: "14358471",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704080/HIVE-9936.1.patch\n\n{color:red}ERROR:{color} -1 due to 1 failed/errored test(s), 7762 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hive.jdbc.TestMultiSessionsHS2WithLocalClusterSpark.testSparkQuery\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3014/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3014/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3014/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 1 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704080 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-12T10:40:28.903+0000",
        updated: "2015-03-12T10:40:28.903+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781396/comment/14363568",
        id: "14363568",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=jdere",
          name: "jdere",
          key: "jdere",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jason Dere",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T17:41:13.699+0000",
        updated: "2015-03-16T17:41:13.699+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781396/comment/14548886",
        id: "14548886",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:52:59.165+0000",
        updated: "2015-05-18T19:52:59.165+0000",
      },
    ],
  },
  {
    key: "HIVE-9935",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
      name: "jxiang",
      key: "jxiang",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jimmy Xiang",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
      name: "jxiang",
      key: "jxiang",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jimmy Xiang",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
      name: "jxiang",
      key: "jxiang",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jimmy Xiang",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-12T03:38:19.891Z",
    workRatio: -1,
    created: "2015-03-11T23:12:35.498Z",
    updated: "2015-06-05T20:03:41.521Z",
    description:
      "In spark branch, these tests don't have java 1.8 golden file:\n\njoin0.q\nlist_bucket_dml_2.q\nsubquery_multiinsert.q\n",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Fix tests for java 1.8 [Spark Branch]",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781351/comment/14357826",
        id: "14357826",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
          name: "jxiang",
          key: "jxiang",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jimmy Xiang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "The results for 1.8 is similar to those for 1.7.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
          name: "jxiang",
          key: "jxiang",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jimmy Xiang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T23:43:59.237+0000",
        updated: "2015-03-11T23:43:59.237+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781351/comment/14357907",
        id: "14357907",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-12T01:05:32.628+0000",
        updated: "2015-03-12T01:05:32.628+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781351/comment/14357931",
        id: "14357931",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704052/HIVE-9935.1-spark.patch\n\n{color:red}ERROR:{color} -1 due to 3 failed/errored test(s), 7644 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_union12\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_union31\norg.apache.hadoop.hive.metastore.TestPartitionNameWhitelistValidation.testAddPartitionWithUnicode\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-SPARK-Build/785/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-SPARK-Build/785/console\nTest logs: http://ec2-50-18-27-0.us-west-1.compute.amazonaws.com/logs/PreCommit-HIVE-SPARK-Build-785/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 3 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704052 - PreCommit-HIVE-SPARK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-12T01:22:13.488+0000",
        updated: "2015-03-12T01:22:13.488+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781351/comment/14358045",
        id: "14358045",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to Spark branch. Thanks, Jimmy.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-12T03:38:19.925+0000",
        updated: "2015-03-12T03:38:19.925+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781351/comment/14575151",
        id: "14575151",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Closing jiras fixed in 1.2.0 release . \nPlease open new jira if you find any related issue.\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-06-05T20:03:41.518+0000",
        updated: "2015-06-05T20:03:41.518+0000",
      },
    ],
  },
  {
    key: "HIVE-9934",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
      name: "csun",
      key: "csun",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
      },
      displayName: "Chao Sun",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
      name: "csun",
      key: "csun",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
      },
      displayName: "Chao Sun",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
      name: "csun",
      key: "csun",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
      },
      displayName: "Chao Sun",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-17T22:06:48.333Z",
    workRatio: -1,
    created: "2015-03-11T21:11:38.407Z",
    updated: "2015-05-18T19:50:15.206Z",
    description:
      'Vulnerability in LdapAuthenticationProviderImpl enables HiveServer2 client to degrade the authentication mechanism to "none", allowing authentication without password.\n\nSee: http://docs.oracle.com/javase/jndi/tutorial/ldap/security/simple.html\n???If you supply an empty string, an empty byte/char array, or null to the Context.SECURITY_CREDENTIALS environment property, then the authentication mechanism will be "none". This is because the LDAP requires the password to be nonempty for simple authentication. The protocol automatically converts the authentication to "none" if a password is not supplied.???\n \nSince the LdapAuthenticationProviderImpl.Authenticate method is relying on a NamingException being thrown during creation of initial context, it does not fail when the context result is an ???unauthenticated??? positive response from the LDAP server. The end result is, one can authenticate with HiveServer2 using the LdapAuthenticationProviderImpl with only a user name and an empty password.\n',
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary:
      'Vulnerability in LdapAuthenticationProviderImpl enables HiveServer2 client to degrade the authentication mechanism to "none", allowing authentication without password',
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14357669",
        id: "14357669",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Check if password is null or blank. If so, throw exception.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T21:41:56.501+0000",
        updated: "2015-03-11T21:41:56.501+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14358251",
        id: "14358251",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704024/HIVE-9934.1.patch\n\n{color:green}SUCCESS:{color} +1 7762 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3012/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3012/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3012/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704024 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-12T07:58:28.952+0000",
        updated: "2015-03-12T07:58:28.952+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14363920",
        id: "14363920",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "(cc [~prasadm] [~xuefuz]). I was able to reproduce the issue after disabling JDBC authentication and use the Hadoop provided {{SaslPlainServerFactory}}. I need to do the latter because Hive provided Sasl server implementation checks the case when password is empty, therefore the issue could be prevented. However, if the Hadoop version class gets loaded first (which doesn't check whether password is null or empty), then the issue could still happen.\n\nIn this patch I also included a simple uni test. Desirably we should write an end-to-end test, however that involves non-trivial work. I'll put that in a follow-up JIRA.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T20:55:46.380+0000",
        updated: "2015-03-16T20:55:46.380+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14364092",
        id: "14364092",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-16T22:26:41.952+0000",
        updated: "2015-03-16T22:26:41.952+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14364424",
        id: "14364424",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704870/HIVE-9934.2.patch\n\n{color:red}ERROR:{color} -1 due to 2 failed/errored test(s), 7769 tests executed\n*Failed tests:*\n{noformat}\nTestCustomAuthentication - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udaf_percentile_approx_23\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3047/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3047/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3047/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 2 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704870 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T02:09:23.404+0000",
        updated: "2015-03-17T02:09:23.404+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14364462",
        id: "14364462",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "There's a redundant field {{hiveServer2}} in the previous patch. This patch removes it - it shouldn't affect test results.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T02:47:44.187+0000",
        updated: "2015-03-17T02:47:44.187+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365024",
        id: "14365024",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704981/HIVE-9934.3.patch\n\n{color:red}ERROR:{color} -1 due to 1 failed/errored test(s), 7770 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hive.jdbc.TestMultiSessionsHS2WithLocalClusterSpark.testSparkQuery\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3053/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3053/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3053/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 1 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704981 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T11:55:38.338+0000",
        updated: "2015-03-17T11:55:38.338+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365037",
        id: "14365037",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Found this in log: \n\n{noformat}\n2015-03-17 04:33:32,728 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - 2015-03-17 04:33:32,725 INFO  [pool-1-thread-1] client.RemoteDriver (RemoteDriver.java:call(371)) - Failed to run job 681ccfbe-bf9f-491c-a2e7-ad513f62d1dc\n2015-03-17 04:33:32,728 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - java.util.concurrent.ExecutionException: Exception thrown by job\n2015-03-17 04:33:32,728 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.JavaFutureActionWrapper.getImpl(FutureAction.scala:311)\n2015-03-17 04:33:32,728 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.JavaFutureActionWrapper.get(FutureAction.scala:316)\n2015-03-17 04:33:32,728 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.hive.spark.client.RemoteDriver$JobWrapper.call(RemoteDriver.java:364)\n2015-03-17 04:33:32,728 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.hive.spark.client.RemoteDriver$JobWrapper.call(RemoteDriver.java:317)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.util.concurrent.FutureTask.run(FutureTask.java:262)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.lang.Thread.run(Thread.java:744)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - Caused by: org.apache.spark.SparkException: Job aborted due to stage failure: Task 0 in stage 0.0 failed 4 times, most recent failure: Lost task 0.3 in stage 0.0 (TID 3, ip-10-182-56-7.ec2.internal): java.io.FileNotFoundException: http://10.182.56.7:34690/jars/hive-exec-1.2.0-SNAPSHOT.jar\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1624)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.util.Utils$.doFetchFile(Utils.scala:452)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.util.Utils$.fetchFile(Utils.scala:383)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.executor.Executor$$anonfun$org$apache$spark$executor$Executor$$updateDependencies$6.apply(Executor.scala:350)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.executor.Executor$$anonfun$org$apache$spark$executor$Executor$$updateDependencies$6.apply(Executor.scala:347)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.TraversableLike$WithFilter$$anonfun$foreach$1.apply(TraversableLike.scala:772)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.HashMap$$anonfun$foreach$1.apply(HashMap.scala:98)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.HashMap$$anonfun$foreach$1.apply(HashMap.scala:98)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.HashTable$class.foreachEntry(HashTable.scala:226)\n2015-03-17 04:33:32,729 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.HashMap.foreachEntry(HashMap.scala:39)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.HashMap.foreach(HashMap.scala:98)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.TraversableLike$WithFilter.foreach(TraversableLike.scala:771)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.executor.Executor.org$apache$spark$executor$Executor$$updateDependencies(Executor.scala:347)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.executor.Executor$TaskRunner.run(Executor.scala:177)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1145)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat java.lang.Thread.run(Thread.java:744)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - Driver stacktrace:\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler.org$apache$spark$scheduler$DAGScheduler$$failJobAndIndependentStages(DAGScheduler.scala:1214)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler$$anonfun$abortStage$1.apply(DAGScheduler.scala:1203)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler$$anonfun$abortStage$1.apply(DAGScheduler.scala:1202)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.ResizableArray$class.foreach(ResizableArray.scala:59)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.collection.mutable.ArrayBuffer.foreach(ArrayBuffer.scala:47)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler.abortStage(DAGScheduler.scala:1202)\n2015-03-17 04:33:32,730 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler$$anonfun$handleTaskSetFailed$1.apply(DAGScheduler.scala:696)\n2015-03-17 04:33:32,731 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler$$anonfun$handleTaskSetFailed$1.apply(DAGScheduler.scala:696)\n2015-03-17 04:33:32,731 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat scala.Option.foreach(Option.scala:236)\n2015-03-17 04:33:32,731 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGScheduler.handleTaskSetFailed(DAGScheduler.scala:696)\n2015-03-17 04:33:32,731 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGSchedulerEventProcessActor$$anonfun$receive$2.applyOrElse(DAGScheduler.scala:1420)\n2015-03-17 04:33:32,731 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat akka.actor.Actor$class.aroundReceive(Actor.scala:465)\n2015-03-17 04:33:32,731 INFO  [stdout-redir-1]: client.SparkClientImpl (SparkClientImpl.java:run(537)) - \tat org.apache.spark.scheduler.DAGSchedulerEventProcessActor.aroundReceive(DAGScheduler.scala:137\n{noformat}\n\nI don't think this is relevant to my patch.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T12:11:26.854+0000",
        updated: "2015-03-17T12:11:26.854+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365161",
        id: "14365161",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Attached the same patch for another test run.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T14:16:58.957+0000",
        updated: "2015-03-17T14:16:58.957+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365402",
        id: "14365402",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12705088/HIVE-9934.3.patch\n\n{color:green}SUCCESS:{color} +1 7770 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3056/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3056/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3056/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12705088 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-17T16:08:09.024+0000",
        updated: "2015-03-17T16:08:09.024+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365584",
        id: "14365584",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=prasadm",
          name: "prasadm",
          key: "prasadm",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Prasad Suresh Mujumdar",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "Looks fine to me.\nBTW, testLdapEmptyPassword() is missing the Test annotation.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=prasadm",
          name: "prasadm",
          key: "prasadm",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Prasad Suresh Mujumdar",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-17T17:26:14.418+0000",
        updated: "2015-03-17T17:26:14.418+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365832",
        id: "14365832",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "[~prasadm], I think lacking @Test seems fine in this case, as the class is extended from TestCase. I also saw the added test case was run in previous test result. Thus, patch #3 is good as far as I can see. Let me know if you see differently.\n ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T19:14:09.352+0000",
        updated: "2015-03-17T19:14:09.352+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14365839",
        id: "14365839",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=prasadm",
          name: "prasadm",
          key: "prasadm",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Prasad Suresh Mujumdar",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "That's fine. The test did get run in the pre-commit run for patch #3. sorry about the noise.\n\n+1\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=prasadm",
          name: "prasadm",
          key: "prasadm",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Prasad Suresh Mujumdar",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-17T19:18:46.748+0000",
        updated: "2015-03-17T19:18:46.748+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14366184",
        id: "14366184",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks, Chao.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-17T22:06:48.371+0000",
        updated: "2015-03-17T22:06:48.371+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14369465",
        id: "14369465",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "bq. I was able to reproduce the issue after disabling JDBC authentication and use the Hadoop provided SaslPlainServerFactory. \n[~csun] Can you please elaborate on what you had do to reproduce this ? What do you mean by disabling JDBC authentication ? (I assume we need to set hive.server2.authentication=LDAP for this scenario). Also, since the SaslPlainServerFactory in hive in a different package, does changing the classpath alone result in the Hadoop provided SaslPlainServerFactory getting used ?\n\ncc [~vgumashta]\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-19T15:02:12.384+0000",
        updated: "2015-03-19T15:02:12.384+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14369918",
        id: "14369918",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body: "What documentation does this need?",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-19T19:03:09.882+0000",
        updated: "2015-03-19T19:03:09.882+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14369942",
        id: "14369942",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=prasadm",
          name: "prasadm",
          key: "prasadm",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Prasad Suresh Mujumdar",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "Hive's SaslPlainServer actually throws an exception for empty or null password. When Hadoop implemented it's own plain Sasl server, we are potentially exposed to this LDAP vulnerability. The sasl service registration happens via static code block and hence we can't guarantee which Sasl server will be used.\nAnycase, since this is LDAP specific behavior, it's better to guard it in LDAP provider rather than depending on the underlying Sasl implementation.\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=prasadm",
          name: "prasadm",
          key: "prasadm",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Prasad Suresh Mujumdar",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-03-19T19:14:57.910+0000",
        updated: "2015-03-19T19:14:57.910+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14370174",
        id: "14370174",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Apache has special guidelines regarding security vulnerabilities. Here is the link:\n\nhttp://www.apache.org/security/committers\n\nWe are all new to this, so what we have done so far may not comply to this. However, we should try to do so from now on.\n\nFor doc, please also refer to the document.\n\nAS to the vulnerability, discussion is still ongoing in the community. Thus, we will act based on the conclusions.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-19T21:38:15.502+0000",
        updated: "2015-03-19T21:38:15.502+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14370441",
        id: "14370441",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          'Hi [~thejas], for JDBC, I need to modify the code. In HiveConnection, when password is empty, it will change it to "anonymous". Since I\'m using JDBC + Beeline to reproduce the issue, I need to change it so that the password will still remain empty.\n\nFor SaslPlainServerFactory, sorry my previous comment wasn\'t precise. Here, even though from different packages. they are added via different Providers with the same key ("SaslServerFactory.PLAIN"). Later, when searching for a particular key, it always choose the first Provider that matches. Since the Providers are added in static blocks, the order may not be deterministic. Hence, if the Hadoop one is picked, security issue could happen.',
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-20T00:29:20.792+0000",
        updated: "2015-03-20T00:29:20.792+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14370602",
        id: "14370602",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Thanks [~csun] [~prasadm] !\nHowever, looking at the hadoop code, it does not seem to get added via static code blocks (unlike the hive one). It gets initialized through calls to SaslRpcServer.init(). So it looks like the hive one would get added first, and the hadoop one would get added next (when hive functions such as HadoopThriftAuthBridge23.getHadoopSaslProperties are called. This is then getting stored in a HashTable, which means that the second one is what would get used. It seems like the hadoop one would always get used. (I haven't verified this by testing).\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=thejas",
          name: "thejas",
          key: "thejas",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=thejas&avatarId=15902",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=thejas&avatarId=15902",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=thejas&avatarId=15902",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=thejas&avatarId=15902",
          },
          displayName: "Thejas Nair",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-20T02:39:42.915+0000",
        updated: "2015-03-20T02:44:37.644+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14370664",
        id: "14370664",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Yes, hadoop doesn't use static blocks. But, since Hive class still have it, the order could still vary depending on when the class is loaded, right?\nLooks like SaslRpcServer.init() is called in several places. I debugged it a little, there's one call site in org.apache.hadoop.ipc.RPC which is surrounded by a conditional stat. It might be called before the static block is called (although in different thread), if the condition is true. The execution didn't reach HadoopThriftAuthBridge23.getHadoopSaslProperties in my test.\n\nLooks like new Provider is always added to the end of an ArrayList, and therefore the one added earlier will be used.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-20T03:52:01.636+0000",
        updated: "2015-03-20T03:52:01.636+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781323/comment/14548725",
        id: "14548725",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:50:15.195+0000",
        updated: "2015-05-18T19:50:15.195+0000",
      },
    ],
  },
  {
    key: "HIVE-9929",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
      name: "jxiang",
      key: "jxiang",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jimmy Xiang",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
      name: "jxiang",
      key: "jxiang",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jimmy Xiang",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
      name: "jxiang",
      key: "jxiang",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jimmy Xiang",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-12T16:04:17.879Z",
    workRatio: -1,
    created: "2015-03-11T17:17:51.685Z",
    updated: "2015-05-18T19:49:38.355Z",
    description:
      "In MAPREDUCE-5785, the default value of mapreduce.map.memory.mb is set to -1. We need fix StatsUtil#getAvailableMemory not to return negative value.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "StatsUtil#getAvailableMemory could return negative value",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781255/comment/14357436",
        id: "14357436",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1 on pending tests.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T19:37:48.164+0000",
        updated: "2015-03-11T19:37:48.164+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781255/comment/14357722",
        id: "14357722",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12703956/HIVE-9929.1.patch\n\n{color:red}ERROR:{color} -1 due to 1 failed/errored test(s), 7761 tests executed\n*Failed tests:*\n{noformat}\nTestCustomAuthentication - did not produce a TEST-*.xml file\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3005/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3005/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3005/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 1 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12703956 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-11T22:25:37.948+0000",
        updated: "2015-03-11T22:25:37.948+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781255/comment/14357744",
        id: "14357744",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
          name: "jxiang",
          key: "jxiang",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jimmy Xiang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "This test is ok on my box.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=jxiang",
          name: "jxiang",
          key: "jxiang",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Jimmy Xiang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T22:43:02.653+0000",
        updated: "2015-03-11T22:43:02.653+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781255/comment/14358867",
        id: "14358867",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk. Thanks Jimmy!",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-12T16:04:17.916+0000",
        updated: "2015-03-12T16:04:17.916+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781255/comment/14548695",
        id: "14548695",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:49:38.347+0000",
        updated: "2015-05-18T19:49:38.347+0000",
      },
    ],
  },
  {
    key: "HIVE-9923",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
      name: "ychena",
      key: "ychena",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Yongzhi Chen",
      active: true,
      timeZone: "Etc/UTC",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=zjffdu",
      name: "zjffdu",
      key: "zjffdu",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jeff Zhang",
      active: true,
      timeZone: "Asia/Shanghai",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=zjffdu",
      name: "zjffdu",
      key: "zjffdu",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
      },
      displayName: "Jeff Zhang",
      active: true,
      timeZone: "Asia/Shanghai",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-04-21T04:23:15.646Z",
    workRatio: -1,
    created: "2015-03-11T07:03:51.776Z",
    updated: "2015-05-18T19:53:25.430Z",
    description:
      "For the following sql, \"from\" is missing but it throw NPE which is not clear for user.\n{code}\nhive> insert overwrite directory '/tmp/hive-3' select sb1.name, sb2.age student_bucketed sb1 join student_bucketed sb2 on sb1.name=sb2.name;\nFAILED: NullPointerException null\n{code}",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: 'No clear message when "from" is missing',
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14496451",
        id: "14496451",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          'The NullPointerException stack is:\n{noformat}\nCaused by: java.lang.NullPointerException\n\tat org.apache.hadoop.hive.ql.parse.HiveParser.regularBody(HiveParser.java:40882)\n\tat org.apache.hadoop.hive.ql.parse.HiveParser.queryStatementExpressionBody(HiveParser.java:40059)\n\tat org.apache.hadoop.hive.ql.parse.HiveParser.queryStatementExpression(HiveParser.java:39929)\n\tat org.apache.hadoop.hive.ql.parse.HiveParser.execStatement(HiveParser.java:1574)\n\tat org.apache.hadoop.hive.ql.parse.HiveParser.statement(HiveParser.java:1093)\n\tat org.apache.hadoop.hive.ql.parse.ParseDriver.parse(ParseDriver.java:202)\n\tat org.apache.hadoop.hive.ql.parse.ParseDriver.parse(ParseDriver.java:166)\n\tat org.apache.hadoop.hive.ql.Driver.compile(Driver.java:396)\n\tat org.apache.hadoop.hive.ql.Driver.compile(Driver.java:308)\n\tat org.apache.hadoop.hive.ql.Driver.compileInternal(Driver.java:1122)\n\tat org.apache.hadoop.hive.ql.Driver.compileAndRespond(Driver.java:1116)\n\tat org.apache.hive.service.cli.operation.SQLOperation.prepare(SQLOperation.java:110)\n\t... 27 more\n\n{noformat}\nIt is from HiveParser.java:\n{noformat}\n                           if ( state.backtracking==0 ) {(s!=null?((CommonTree)s.tree):null).getChild(1).replaceChildren(0, 0, (i!=null?((CommonTree)i.tree):null));}\n{noformat}\nWhere there is no from key word, the getChild(1) will be null, then the exception thrown.\nWhen insert with select statement, a "from" should be required not optional. Make the parser change to let it error out before reach getChild(1). \n',
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-15T16:12:59.463+0000",
        updated: "2015-04-15T16:12:59.463+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14496454",
        id: "14496454",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "Need code review. ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-15T16:14:14.596+0000",
        updated: "2015-04-15T16:14:14.596+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14497327",
        id: "14497327",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12725615/HIVE-9923.1.patch\n\n{color:red}ERROR:{color} -1 due to 57 failed/errored test(s), 8690 tests executed\n*Failed tests:*\n{noformat}\nTestMinimrCliDriver-bucketmapjoin6.q-constprog_partitioner.q-infer_bucket_sort_dyn_part.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-external_table_with_space_in_location_path.q-infer_bucket_sort_merge.q-auto_sortmerge_join_16.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-groupby2.q-import_exported_table.q-bucketizedhiveinputformat.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-index_bitmap3.q-stats_counter_partitioned.q-temp_table_external.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_map_operators.q-join1.q-bucketmapjoin7.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_num_buckets.q-disable_merge_for_bucketing.q-uber_reduce.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_reducers_power_two.q-scriptfile1.q-scriptfile1_win.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-leftsemijoin_mr.q-load_hdfs_file_with_space_in_the_name.q-root_dir_external_table.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-list_bucket_dml_10.q-bucket_num_reducers.q-bucket6.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-load_fs2.q-file_with_header_footer.q-ql_rewrite_gbtoidx_cbo_1.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-parallel_orderby.q-reduce_deduplicate.q-ql_rewrite_gbtoidx_cbo_2.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-ql_rewrite_gbtoidx.q-smb_mapjoin_8.q - did not produce a TEST-*.xml file\nTestMinimrCliDriver-schemeAuthority2.q-bucket4.q-input16_cc.q-and-1-more - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_select_dummy_source\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_timestamp_literal\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_add_months\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_bitwise_shiftleft\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_bitwise_shiftright\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_bitwise_shiftrightunsigned\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_cbrt\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_current_database\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_date_add\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_date_sub\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_decode\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_factorial\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_format_number\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_from_utc_timestamp\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_get_json_object\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_last_day\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_levenshtein\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_months_between\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_soundex\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_to_utc_timestamp\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udf_trunc\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udtf_stack\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_union_view\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_explainuser_1\norg.apache.hadoop.hive.cli.TestMiniTezCliDriver.testCliDriver_select_dummy_source\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_ptf_negative_DistributeByOrderBy\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_ptf_negative_PartitionBySortBy\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_select_star_suffix\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_select_udtf_alias\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_subquery_missing_from\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_timestamp_literal\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_add_months_error_1\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_add_months_error_2\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_last_day_error_1\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_last_day_error_2\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_next_day_error_1\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_next_day_error_2\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_trunc_error1\norg.apache.hadoop.hive.cli.TestNegativeCliDriver.testNegativeCliDriver_udf_trunc_error2\norg.apache.hadoop.hive.ql.parse.TestParseNegative.testParseNegative_invalid_select\norg.apache.hive.jdbc.TestJdbcWithMiniHS2.testConnectionSchemaAPIs\norg.apache.hive.jdbc.TestJdbcWithMiniHS2.testUdfBlackList\norg.apache.hive.jdbc.TestJdbcWithMiniHS2.testUdfWhiteList\norg.apache.hive.jdbc.miniHS2.TestHiveServer2SessionTimeout.testConnection\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3450/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3450/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3450/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 57 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12725615 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-04-15T23:48:34.094+0000",
        updated: "2015-04-15T23:48:34.094+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14498288",
        id: "14498288",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "Hive support simple select without from statement (when there is a UDF). When select  in an insert statement, hive need the from clause. The new patch only check from clause null or not in the insert statement. ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-16T16:57:57.173+0000",
        updated: "2015-04-16T16:57:57.173+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14499203",
        id: "14499203",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12725916/HIVE-9923.2.patch\n\n{color:red}ERROR:{color} -1 due to 16 failed/errored test(s), 8712 tests executed\n*Failed tests:*\n{noformat}\nTestMinimrCliDriver-bucketmapjoin6.q-constprog_partitioner.q-infer_bucket_sort_dyn_part.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-external_table_with_space_in_location_path.q-infer_bucket_sort_merge.q-auto_sortmerge_join_16.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-groupby2.q-import_exported_table.q-bucketizedhiveinputformat.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-index_bitmap3.q-stats_counter_partitioned.q-temp_table_external.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_map_operators.q-join1.q-bucketmapjoin7.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_num_buckets.q-disable_merge_for_bucketing.q-uber_reduce.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-infer_bucket_sort_reducers_power_two.q-scriptfile1.q-scriptfile1_win.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-leftsemijoin_mr.q-load_hdfs_file_with_space_in_the_name.q-root_dir_external_table.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-list_bucket_dml_10.q-bucket_num_reducers.q-bucket6.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-load_fs2.q-file_with_header_footer.q-ql_rewrite_gbtoidx_cbo_1.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-parallel_orderby.q-reduce_deduplicate.q-ql_rewrite_gbtoidx_cbo_2.q-and-1-more - did not produce a TEST-*.xml file\nTestMinimrCliDriver-ql_rewrite_gbtoidx.q-smb_mapjoin_8.q - did not produce a TEST-*.xml file\nTestMinimrCliDriver-schemeAuthority2.q-bucket4.q-input16_cc.q-and-1-more - did not produce a TEST-*.xml file\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_union_view\norg.apache.hadoop.hive.thrift.TestHadoop20SAuthBridge.testMetastoreProxyUser\norg.apache.hadoop.hive.thrift.TestHadoop20SAuthBridge.testSaslWithHiveMetaStore\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3468/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3468/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3468/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 16 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12725916 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-04-17T04:04:44.440+0000",
        updated: "2015-04-17T04:04:44.440+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14499779",
        id: "14499779",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "The 16 test failures are not related to the change.\n1. 13 minimr failures appear in many other precommit builds.\n2. org.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_union_view failed 23 times in precommit builds.\n3. two failure: org.apache.hadoop.hive.thrift.TestHadoop20SAuthBridge.testMetastoreProxyUser\norg.apache.hadoop.hive.thrift.TestHadoop20SAuthBridge.testSaslWithHiveMetaStore does not call parser related code.\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-17T13:05:34.402+0000",
        updated: "2015-04-17T13:05:34.402+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14499781",
        id: "14499781",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "[~szehon] or [~csun], could you review the code? Thanks",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-17T13:06:26.425+0000",
        updated: "2015-04-17T13:06:26.425+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14499795",
        id: "14499795",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body:
          "And the 3 non minimr failures appear in this build too:\nhttp://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3470/testReport/",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-17T13:13:29.299+0000",
        updated: "2015-04-17T13:13:29.299+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14500633",
        id: "14500633",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "OK, will take a look at this.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-04-17T20:43:44.463+0000",
        updated: "2015-04-17T20:43:44.463+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14500796",
        id: "14500796",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        body: "It looks good on my side, +1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        created: "2015-04-17T22:16:38.873+0000",
        updated: "2015-04-17T22:16:38.873+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14504178",
        id: "14504178",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "+1. Sorry for the late review.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-04-21T02:33:53.515+0000",
        updated: "2015-04-21T02:33:53.515+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14504292",
        id: "14504292",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        body: "Committed to trunk, thanks Yongzhi!",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=szehon",
          name: "szehon",
          key: "szehon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Szehon Ho",
          active: true,
          timeZone: "Europe/Paris",
        },
        created: "2015-04-21T04:23:15.689+0000",
        updated: "2015-04-21T04:23:15.689+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14504929",
        id: "14504929",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        body: "Thanks [~szehon] and [~csun] for reviewing it.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=ychena",
          name: "ychena",
          key: "ychena",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Yongzhi Chen",
          active: true,
          timeZone: "Etc/UTC",
        },
        created: "2015-04-21T13:20:35.839+0000",
        updated: "2015-04-21T13:20:35.839+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12781102/comment/14548913",
        id: "14548913",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:53:25.423+0000",
        updated: "2015-05-18T19:53:25.423+0000",
      },
    ],
  },
  {
    key: "HIVE-9916",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
      name: "csun",
      key: "csun",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
      },
      displayName: "Chao Sun",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Resolved",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
      name: "csun",
      key: "csun",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
      },
      displayName: "Chao Sun",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
      name: "csun",
      key: "csun",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
      },
      displayName: "Chao Sun",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-11T23:10:03.620Z",
    workRatio: -1,
    created: "2015-03-10T20:13:54.373Z",
    updated: "2015-03-11T23:10:03.661Z",
    description:
      "Looks like in HIVE-9872, wrong patch is committed, and therefore TestSparkSessionManagerImpl will still fail. This JIRA should fix it.",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Fix TestSparkSessionManagerImpl [Spark Branch]",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780973/comment/14355653",
        id: "14355653",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          '\n\n{color:red}Overall{color}: -1 no tests executed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12703735/HIVE-9916.1-spark.patch\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-SPARK-Build/777/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-SPARK-Build/777/console\nTest logs: http://ec2-50-18-27-0.us-west-1.compute.amazonaws.com/logs/PreCommit-HIVE-SPARK-Build-777/\n\nMessages:\n{noformat}\n**** This message was trimmed, see log for full details ****\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL KW_AND" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_TIMESTAMP StringLiteral" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN CharSetName CharSetLiteral" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL LESSTHANOREQUALTO" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN LPAREN StringLiteral" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL LESSTHAN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_CASE KW_EXISTS" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL GREATERTHANOREQUALTO" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_DATE StringLiteral" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL GREATERTHAN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL BITWISEXOR" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_CASE KW_ARRAY" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_NULL KW_BETWEEN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:68:4: \nDecision can match input such as "LPAREN KW_CASE KW_STRUCT" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:115:5: \nDecision can match input such as "KW_CLUSTER KW_BY LPAREN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:127:5: \nDecision can match input such as "KW_PARTITION KW_BY LPAREN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:138:5: \nDecision can match input such as "KW_DISTRIBUTE KW_BY LPAREN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:149:5: \nDecision can match input such as "KW_SORT KW_BY LPAREN" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:166:7: \nDecision can match input such as "STAR" using multiple alternatives: 1, 2\n\nAs a result, alternative(s) 2 were disabled for that input\nwarning(200): IdentifiersParser.g:194:5: \nDecision can match input such as "KW_ARRAY" using multiple alternatives: 2, 6\n\nAs a result, alternative(s) 6 were disabled for that input\nwarning(200): IdentifiersParser.g:194:5: \nDecision can match input such as "KW_UNIONTYPE" using multiple alternatives: 5, 6\n\nAs a result, alternative(s) 6 were disabled for that input\nwarning(200): IdentifiersParser.g:194:5: \nDecision can match input such as "KW_STRUCT" using multiple alternatives: 4, 6\n\nAs a result, alternative(s) 6 were disabled for that input\nwarning(200): IdentifiersParser.g:288:5: \nDecision can match input such as "KW_NULL" using multiple alternatives: 1, 8\n\nAs a result, alternative(s) 8 were disabled for that input\nwarning(200): IdentifiersParser.g:288:5: \nDecision can match input such as "KW_FALSE" using multiple alternatives: 2, 8\n\nAs a result, alternative(s) 8 were disabled for that input\nwarning(200): IdentifiersParser.g:288:5: \nDecision can match input such as "KW_TRUE" using multiple alternatives: 2, 8\n\nAs a result, alternative(s) 8 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "KW_BETWEEN KW_MAP LPAREN" using multiple alternatives: 8, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_LATERAL KW_VIEW" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_DISTRIBUTE KW_BY" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_INSERT KW_INTO" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_GROUP KW_BY" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_SORT KW_BY" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_CLUSTER KW_BY" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_ORDER KW_BY" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_MAP LPAREN" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:420:5: \nDecision can match input such as "{KW_LIKE, KW_REGEXP, KW_RLIKE} KW_INSERT KW_OVERWRITE" using multiple alternatives: 2, 9\n\nAs a result, alternative(s) 9 were disabled for that input\nwarning(200): IdentifiersParser.g:545:5: \nDecision can match input such as "{AMPERSAND..BITWISEXOR, DIV..DIVIDE, EQUAL..EQUAL_NS, GREATERTHAN..GREATERTHANOREQUALTO, KW_AND, KW_ARRAY, KW_BETWEEN..KW_BOOLEAN, KW_CASE, KW_DOUBLE, KW_FLOAT, KW_IF, KW_IN, KW_INT, KW_LIKE, KW_MAP, KW_NOT, KW_OR, KW_REGEXP, KW_RLIKE, KW_SMALLINT, KW_STRING..KW_STRUCT, KW_TINYINT, KW_UNIONTYPE, KW_WHEN, LESSTHAN..LESSTHANOREQUALTO, MINUS..NOTEQUAL, PLUS, STAR, TILDE}" using multiple alternatives: 1, 3\n\nAs a result, alternative(s) 3 were disabled for that input\n[INFO] \n[INFO] --- maven-remote-resources-plugin:1.5:process (default) @ hive-exec ---\nDownloading: http://ec2-50-18-79-139.us-west-1.compute.amazonaws.com/data/spark_2.10-1.3-rc1/org/pentaho/pentaho-aggdesigner-algorithm/5.1.5-jhyde/pentaho-aggdesigner-algorithm-5.1.5-jhyde.pom\n[INFO] ------------------------------------------------------------------------\n[INFO] Reactor Summary:\n[INFO] \n[INFO] Hive .............................................. SUCCESS [3.549s]\n[INFO] Hive Shims Common ................................. SUCCESS [3.882s]\n[INFO] Hive Shims 0.20S .................................. SUCCESS [0.962s]\n[INFO] Hive Shims 0.23 ................................... SUCCESS [2.503s]\n[INFO] Hive Shims Scheduler .............................. SUCCESS [0.752s]\n[INFO] Hive Shims ........................................ SUCCESS [0.473s]\n[INFO] Hive Common ....................................... SUCCESS [3.004s]\n[INFO] Hive Serde ........................................ SUCCESS [4.674s]\n[INFO] Hive Metastore .................................... SUCCESS [12.144s]\n[INFO] Hive Ant Utilities ................................ SUCCESS [0.575s]\n[INFO] Spark Remote Client ............................... SUCCESS [5.572s]\n[INFO] Hive Query Language ............................... FAILURE [1:09.504s]\n[INFO] Hive Service ...................................... SKIPPED\n[INFO] Hive Accumulo Handler ............................. SKIPPED\n[INFO] Hive JDBC ......................................... SKIPPED\n[INFO] Hive Beeline ...................................... SKIPPED\n[INFO] Hive CLI .......................................... SKIPPED\n[INFO] Hive Contrib ...................................... SKIPPED\n[INFO] Hive HBase Handler ................................ SKIPPED\n[INFO] Hive HCatalog ..................................... SKIPPED\n[INFO] Hive HCatalog Core ................................ SKIPPED\n[INFO] Hive HCatalog Pig Adapter ......................... SKIPPED\n[INFO] Hive HCatalog Server Extensions ................... SKIPPED\n[INFO] Hive HCatalog Webhcat Java Client ................. SKIPPED\n[INFO] Hive HCatalog Webhcat ............................. SKIPPED\n[INFO] Hive HCatalog Streaming ........................... SKIPPED\n[INFO] Hive HWI .......................................... SKIPPED\n[INFO] Hive ODBC ......................................... SKIPPED\n[INFO] Hive Shims Aggregator ............................. SKIPPED\n[INFO] Hive TestUtils .................................... SKIPPED\n[INFO] Hive Packaging .................................... SKIPPED\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD FAILURE\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 1:48.579s\n[INFO] Finished at: Tue Mar 10 16:42:44 EDT 2015\n[INFO] Final Memory: 90M/888M\n[INFO] ------------------------------------------------------------------------\n[ERROR] Failed to execute goal org.apache.maven.plugins:maven-remote-resources-plugin:1.5:process (default) on project hive-exec: Error resolving project artifact: Could not transfer artifact org.pentaho:pentaho-aggdesigner-algorithm:pom:5.1.5-jhyde from/to spark-1.3 (http://ec2-50-18-79-139.us-west-1.compute.amazonaws.com/data/spark_2.10-1.3-rc1/): Connection to http://ec2-50-18-79-139.us-west-1.compute.amazonaws.com refused for project org.pentaho:pentaho-aggdesigner-algorithm:jar:5.1.5-jhyde: Connection timed out -> [Help 1]\n[ERROR] \n[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.\n[ERROR] Re-run Maven using the -X switch to enable full debug logging.\n[ERROR] \n[ERROR] For more information about the errors and possible solutions, please read the following articles:\n[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException\n[ERROR] \n[ERROR] After correcting the problems, you can resume the build with the command\n[ERROR]   mvn <goals> -rf :hive-exec\n+ exit 1\n\'\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12703735 - PreCommit-HIVE-SPARK-Build',
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-10T20:36:34.888+0000",
        updated: "2015-03-10T20:36:34.888+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780973/comment/14357305",
        id: "14357305",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Attaching the same patch to trigger run.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T18:04:29.816+0000",
        updated: "2015-03-11T18:04:29.816+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780973/comment/14357466",
        id: "14357466",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12703970/HIVE-9916.2-spark.patch\n\n{color:red}ERROR:{color} -1 due to 3 failed/errored test(s), 7644 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udaf_percentile_approx_23\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_union12\norg.apache.hadoop.hive.cli.TestSparkCliDriver.testCliDriver_union31\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-SPARK-Build/784/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-SPARK-Build/784/console\nTest logs: http://ec2-50-18-27-0.us-west-1.compute.amazonaws.com/logs/PreCommit-HIVE-SPARK-Build-784/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 3 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12703970 - PreCommit-HIVE-SPARK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-11T19:52:39.848+0000",
        updated: "2015-03-11T19:52:39.848+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780973/comment/14357474",
        id: "14357474",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "Test failures are not related, although we do need to look at union12, and union31. They probably came from HIVE-9569.",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T19:56:41.527+0000",
        updated: "2015-03-11T19:56:41.527+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780973/comment/14357739",
        id: "14357739",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "+1\n\nThe union related test failures will be addressed in HIVE-9924.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=xuefuz",
          name: "xuefuz",
          key: "xuefuz",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Xuefu Zhang",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T22:41:38.145+0000",
        updated: "2015-03-11T22:43:26.336+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780973/comment/14357775",
        id: "14357775",
        author: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to Spark branch. Thanks Xuefu for reviewing!",
        updateAuthor: {
          self: "https://issues.apache.org/jira/rest/api/2/user?username=csun",
          name: "csun",
          key: "csun",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=csun&avatarId=23340",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=csun&avatarId=23340",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=csun&avatarId=23340",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=csun&avatarId=23340",
          },
          displayName: "Chao Sun",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-11T23:10:03.657+0000",
        updated: "2015-03-11T23:10:03.657+0000",
      },
    ],
  },
  {
    key: "HIVE-9915",
    resolution: "Fixed",
    timeEstimate: null,
    aggregateOriginalEstimate: null,
    labels: [],
    priority: "Major",
    assignee: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    status: "Closed",
    statusCategory: "Done",
    sprint: null,
    creator: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    reporter: {
      self: "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
      name: "hagleitn",
      key: "hagleitn",
      avatarUrls: {
        "48x48":
          "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
        "24x24":
          "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
        "16x16":
          "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
        "32x32":
          "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
      },
      displayName: "Gunther Hagleitner",
      active: true,
      timeZone: "America/Los_Angeles",
    },
    aggregateProgress: { progress: 0, total: 0 },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] },
    issueType: "Bug",
    timeSpent: null,
    reviewers: [],
    project: "Hive",
    resolutionDate: "2015-03-25T22:50:20.175Z",
    workRatio: -1,
    created: "2015-03-10T19:56:56.701Z",
    updated: "2016-06-29T23:33:17.005Z",
    description:
      "We already allow setting a system wide default format. In some cases it's useful though to specify this only for managed tables, or distinguish external and managed via two variables. You might want to set a more efficient (than text) format for managed tables, but leave external to text (as they often are log files etc.)",
    timeTracking: {},
    levelOfEffort: null,
    testCaseIncluded: null,
    summary: "Allow specifying file format for managed tables",
    reviewer: null,
    dueDate: null,
    comments: [
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14357711",
        id: "14357711",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
          name: "gopalv",
          key: "gopalv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Gopal Vijayaraghavan",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body: "LGTM - +1",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
          name: "gopalv",
          key: "gopalv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Gopal Vijayaraghavan",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2015-03-11T22:18:42.313+0000",
        updated: "2015-03-11T22:18:42.313+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14358111",
        id: "14358111",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:red}Overall{color}: -1 at least one tests failed\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12703732/HIVE-9915.1.patch\n\n{color:red}ERROR:{color} -1 due to 2 failed/errored test(s), 7763 tests executed\n*Failed tests:*\n{noformat}\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_default_file_format\norg.apache.hadoop.hive.cli.TestCliDriver.testCliDriver_udaf_context_ngrams\n{noformat}\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3010/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3010/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3010/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\nTests exited with: TestsFailedException: 2 tests failed\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12703732 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-12T05:14:34.661+0000",
        updated: "2015-03-12T05:14:34.661+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14358150",
        id: "14358150",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          "The description of *hive.default.fileformat.managed* should be rephrased to clarify which default is which:\n\nbq.  Default file format for CREATE TABLE statement applied to managed tables only. External tables will be created with default file format. Leaving this null will result in using the default file format for all tables.\n\nFor example:\n\nbq.  Default file format for CREATE TABLE statement applied to managed tables only. External tables will be created with the format specified by hive.default.fileformat. Leaving this null will result in using hive.default.fileformat for all tables.\n",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-12T06:16:27.580+0000",
        updated: "2015-03-12T06:16:27.580+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14359646",
        id: "14359646",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          ".2 addresses [~leftylev]'s comment and fixes the test case (apparently using a non existing path works on my machine but not for the build).",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-12T23:55:21.482+0000",
        updated: "2015-03-12T23:55:21.482+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14359709",
        id: "14359709",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body: "Looks good, thanks Gunther.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-13T00:58:05.541+0000",
        updated: "2015-03-13T00:58:05.541+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14359716",
        id: "14359716",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
          name: "gopalv",
          key: "gopalv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Gopal Vijayaraghavan",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        body:
          "[~leftylev]: While reviewing Gunther's patch I ran into some questions which the doc answered, but weren't obvious.\n\nThe quadrant of native vs non-native and external vs managed needs to be drawn somehow for this to explain the feature in the docs.\n\n|| \\ || Native || Non-Native ||\n| Managed | hive.default.fileformat.managed (or fall back to the other) | not covered by default file-formats | \n| External | hive.default.fileformat  |  not covered by default file-formats | ",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=gopalv",
          name: "gopalv",
          key: "gopalv",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Gopal Vijayaraghavan",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2015-03-13T01:02:17.620+0000",
        updated: "2015-03-13T01:02:17.620+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14359772",
        id: "14359772",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        body:
          "\n\n{color:green}Overall{color}: +1 all checks pass\n\nHere are the results of testing the latest attachment:\nhttps://issues.apache.org/jira/secure/attachment/12704294/HIVE-9915.2.patch\n\n{color:green}SUCCESS:{color} +1 7763 tests passed\n\nTest results: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3023/testReport\nConsole output: http://ec2-174-129-184-35.compute-1.amazonaws.com/jenkins/job/PreCommit-HIVE-TRUNK-Build/3023/console\nTest logs: http://ec2-174-129-184-35.compute-1.amazonaws.com/logs/PreCommit-HIVE-TRUNK-Build-3023/\n\nMessages:\n{noformat}\nExecuting org.apache.hive.ptest.execution.PrepPhase\nExecuting org.apache.hive.ptest.execution.ExecutionPhase\nExecuting org.apache.hive.ptest.execution.ReportingPhase\n{noformat}\n\nThis message is automatically generated.\n\nATTACHMENT ID: 12704294 - PreCommit-HIVE-TRUNK-Build",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hiveqa",
          name: "hiveqa",
          key: "hiveqa",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hiveqa&avatarId=17060",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hiveqa&avatarId=17060",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hiveqa&avatarId=17060",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hiveqa&avatarId=17060",
          },
          displayName: "Hive QA",
          active: true,
          timeZone: "America/Chicago",
        },
        created: "2015-03-13T01:44:36.464+0000",
        updated: "2015-03-13T01:44:36.464+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14359998",
        id: "14359998",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftylev",
          name: "leftylev",
          key: "leftylev",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10453",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10453",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10453",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10453",
          },
          displayName: "leftylev",
          active: false,
          timeZone: "Etc/UTC",
        },
        body:
          'Good idea, [~gopalv].  Thanks.\n\nThe quadrant can be added to "Configuration Properties" and to the "File Formats" overview page (which is just a stub with links currently):\n\n* [Configuration Properties -- File Formats | https://cwiki.apache.org/confluence/display/Hive/Configuration+Properties#ConfigurationProperties-FileFormats]\n* [File Formats | https://cwiki.apache.org/confluence/display/Hive/FileFormats]',
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-13T06:12:51.954+0000",
        updated: "2015-04-13T05:13:09.079+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14361631",
        id: "14361631",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        body:
          "_Nudge:_  This has been committed (http://svn.apache.org/r1666524) so the status should be changed.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=leftyl",
          name: "leftyl",
          key: "lefty@hortonworks.com",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=lefty%40hortonworks.com&avatarId=15906",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=lefty%40hortonworks.com&avatarId=15906",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=lefty%40hortonworks.com&avatarId=15906",
          },
          displayName: "Lefty Leverenz",
          active: true,
          timeZone: "America/New_York",
        },
        created: "2015-03-14T06:31:21.072+0000",
        updated: "2015-03-14T06:31:21.072+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14380954",
        id: "14380954",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body: "Committed to trunk.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=hagleitn",
          name: "hagleitn",
          key: "hagleitn",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=hagleitn&avatarId=16035",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=hagleitn&avatarId=16035",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=hagleitn&avatarId=16035",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=hagleitn&avatarId=16035",
          },
          displayName: "Gunther Hagleitner",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-03-25T22:50:20.213+0000",
        updated: "2015-03-25T22:50:20.213+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/14548664",
        id: "14548664",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        body:
          "This issue has been fixed and released as part of the 1.2.0 release. If you find an issue which seems to be related to this one, please create a new jira and link this one with new jira.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sushanth",
          name: "sushanth",
          key: "sushanth",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?ownerId=sushanth&avatarId=26812",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&ownerId=sushanth&avatarId=26812",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&ownerId=sushanth&avatarId=26812",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&ownerId=sushanth&avatarId=26812",
          },
          displayName: "Sushanth Sowmyan",
          active: true,
          timeZone: "America/Los_Angeles",
        },
        created: "2015-05-18T19:49:01.123+0000",
        updated: "2015-05-18T19:49:01.123+0000",
      },
      {
        self:
          "https://issues.apache.org/jira/rest/api/2/issue/12780968/comment/15308961",
        id: "15308961",
        author: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sladymon",
          name: "sladymon",
          key: "sladymon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Shannon Ladymon",
          active: true,
          timeZone: "America/Vancouver",
        },
        body:
          "Doc done - *hive.default.fileformat.managed* has been added to the wiki:\n* [Configuration Properties | https://cwiki.apache.org/confluence/display/Hive/Configuration+Properties#ConfigurationProperties-hive.default.fileformat.managed]\n\n[~gopalv], thanks for the quadrant chart above.  It has been included with the parameter in the wiki.",
        updateAuthor: {
          self:
            "https://issues.apache.org/jira/rest/api/2/user?username=sladymon",
          name: "sladymon",
          key: "sladymon",
          avatarUrls: {
            "48x48":
              "https://issues.apache.org/jira/secure/useravatar?avatarId=10452",
            "24x24":
              "https://issues.apache.org/jira/secure/useravatar?size=small&avatarId=10452",
            "16x16":
              "https://issues.apache.org/jira/secure/useravatar?size=xsmall&avatarId=10452",
            "32x32":
              "https://issues.apache.org/jira/secure/useravatar?size=medium&avatarId=10452",
          },
          displayName: "Shannon Ladymon",
          active: true,
          timeZone: "America/Vancouver",
        },
        created: "2016-06-01T00:30:12.007+0000",
        updated: "2016-06-01T00:30:12.007+0000",
      },
    ],
  },
];
